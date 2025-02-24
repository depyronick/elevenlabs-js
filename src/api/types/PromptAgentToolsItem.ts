/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export type PromptAgentToolsItem = ElevenLabs.PromptAgentToolsItem.Webhook | ElevenLabs.PromptAgentToolsItem.Client;

export namespace PromptAgentToolsItem {
    export interface Webhook extends ElevenLabs.WebhookToolConfig {
        type: "webhook";
    }

    export interface Client extends ElevenLabs.ClientToolConfig {
        type: "client";
    }
}
