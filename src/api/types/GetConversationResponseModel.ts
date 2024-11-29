/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface GetConversationResponseModel {
    agent_id: string;
    conversation_id: string;
    status: ElevenLabs.GetConversationResponseModelStatus;
    transcript: ElevenLabs.ConversationHistoryTranscriptCommonModel[];
    metadata: ElevenLabs.ConversationHistoryMetadataCommonModel;
    analysis?: ElevenLabs.ConversationHistoryAnalysisCommonModel;
    conversation_initiation_client_data?: ElevenLabs.ConversationInitiationClientData;
}
