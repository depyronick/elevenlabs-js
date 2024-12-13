/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type FineTuningResponseModelStateValue =
    | "not_started"
    | "queued"
    | "fine_tuning"
    | "fine_tuned"
    | "failed"
    | "delayed";
export const FineTuningResponseModelStateValue = {
    NotStarted: "not_started",
    Queued: "queued",
    FineTuning: "fine_tuning",
    FineTuned: "fine_tuned",
    Failed: "failed",
    Delayed: "delayed",
} as const;
