/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export type EmbedConfigAvatar =
    | ElevenLabs.EmbedConfigAvatar.Orb
    | ElevenLabs.EmbedConfigAvatar.Url
    | ElevenLabs.EmbedConfigAvatar.Image;

export declare namespace EmbedConfigAvatar {
    interface Orb extends ElevenLabs.OrbAvatar {
        type: "orb";
    }

    interface Url extends ElevenLabs.UrlAvatar {
        type: "url";
    }

    interface Image extends ElevenLabs.ImageAvatar {
        type: "image";
    }
}
