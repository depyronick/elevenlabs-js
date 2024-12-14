/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../../../../index";
import * as fs from "fs";

export interface BodySpeechToSpeechV1SpeechToSpeechVoiceIdPost {
    /**
     * When enable_logging is set to false full privacy mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Full privacy mode may only be used by enterprise customers.
     */
    enable_logging?: boolean;
    /**
     * You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values:
     * 0 - default mode (no latency optimizations)
     * 1 - normal latency optimizations (about 50% of possible latency improvement of option 3)
     * 2 - strong latency optimizations (about 75% of possible latency improvement of option 3)
     * 3 - max latency optimizations
     * 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).
     *
     * Defaults to None.
     */
    optimize_streaming_latency?: number;
    /**
     * The output format of the generated audio.
     */
    output_format?: ElevenLabs.OutputFormat;
    audio: File | fs.ReadStream | Blob;
    /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for speech to speech, you can check this using the can_do_voice_conversion property. */
    model_id?: string;
    /** Voice settings overriding stored setttings for the given voice. They are applied only on the given request. Needs to be send as a JSON encoded string. */
    voice_settings?: string;
    /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. Must be integer between 0 and 4294967295. */
    seed?: number;
    /** If set will remove the background noise from your audio input using our audio isolation model. Only applies to Voice Changer. */
    remove_background_noise?: boolean;
}
