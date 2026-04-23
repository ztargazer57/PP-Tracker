export function getCloudinaryImageUrl(value?: string | null) {
  if (!value) return "";

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    console.error("Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");
    return "";
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${value}`;
}
