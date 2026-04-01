"use client"

import { Field, FieldGroup, FieldLabel } from "./ui/field";
import RoutineItem from "./HoldButton";
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";
import { fetchDailyRoutineStatus, fetchDailyRoutineUpdate } from "@/lib/system";
import { useEffect, useState } from "react";

export default function DailyRoutineWidget() {
        const [data, setData] = useState<any>(null);

        useEffect(() => {
            async function loadData() {
                const res = await fetchDailyRoutineStatus();
                setData(res);
            }
            loadData();
        }, []);

        if(!data) return <div>Loading...</div>

    const handleChange = async (
    field: string,
    value: boolean | "indeterminate"
) => {
    const checked = value === true;

        setData((prev: any) => ({
            ...prev,
            [field]: checked,
        }));
        await fetchDailyRoutineUpdate(field,checked);
}

    return (
        <div className="min-w-20 w-full">
            <FieldGroup className="mt-5 gap-3">
                <Field orientation="horizontal">
                    <RoutineItem checked={data.gestureDrawing} label="Gesture Drawing" onChange={(value) => handleChange("gestureDrawing", value)}></RoutineItem>
                </Field>

                <Field orientation="horizontal">
                    <RoutineItem checked={data.construction} label="Construction" onChange={(value) => handleChange("construction", value)}></RoutineItem>
                </Field>

                <Field orientation="horizontal">
                   <RoutineItem checked={data.targetedPractice} label="Targeted Practice" onChange={(value) => handleChange("targetedPractice", value)}></RoutineItem>
                </Field>
            </FieldGroup>
        </div>
    );
}
