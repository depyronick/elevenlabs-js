/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../../../../index";

/**
 * @example
 *     {
 *         conversation_config: {}
 *     }
 */
export interface BodyCreateAgentV1ConvaiAgentsCreatePost {
    /** Conversation configuration for an agent */
    conversation_config: ElevenLabs.ConversationalConfig;
    /** Platform settings for the agent are all settings that aren't related to the conversation orchestration and content. */
    platform_settings?: ElevenLabs.AgentPlatformSettings;
    /** A name to make the agent easier to find */
    name?: string;
}
