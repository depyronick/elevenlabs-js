/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface User {
    subscription: ElevenLabs.SubscriptionResponse;
    subscription_extras?: unknown;
    is_new_user: boolean;
    xi_api_key: string;
    can_use_delayed_payment_methods: boolean;
    is_onboarding_completed: boolean;
    is_onboarding_checklist_completed: boolean;
    first_name?: string;
    is_api_key_hashed?: boolean;
    xi_api_key_preview?: string;
    referral_link_code?: string;
    partnerstack_partner_default_link?: string;
}
