/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface ProjectResponse {
    project_id: string;
    name: string;
    create_date_unix: number;
    default_title_voice_id: string;
    default_paragraph_voice_id: string;
    default_model_id: string;
    last_conversion_date_unix?: number;
    can_be_downloaded: boolean;
    title?: string;
    author?: string;
    description?: string;
    genres?: string[];
    cover_image_url?: string;
    target_audience?: ElevenLabs.ProjectResponseModelTargetAudience;
    language?: string;
    content_type?: string;
    original_publication_date?: string;
    mature_content?: boolean;
    isbn_number?: string;
    volume_normalization: boolean;
    state: ElevenLabs.ProjectState;
    access_level: ElevenLabs.ProjectResponseModelAccessLevel;
    fiction?: ElevenLabs.ProjectResponseModelFiction;
    quality_check_on: boolean;
    quality_check_on_when_bulk_convert: boolean;
}
