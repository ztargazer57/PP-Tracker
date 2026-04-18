import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No file uploaded." },
        { status: 400 }
      );
    }

    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return NextResponse.json(
        { error: "Cloudinary environment variables are missing." },
        { status: 500 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result: UploadApiResponse = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "weekly-submissions",
          resource_type: "image",
        },
        (error, result) => {
          if (error || !result) {
            reject(error ?? new Error("Upload failed"));
            return;
          }

          resolve(result);
        }
      );

      stream.end(buffer);
    });

    return NextResponse.json({
      secure_url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to upload image.",
      },
      { status: 500 }
    );
  }
}
