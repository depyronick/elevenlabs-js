/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../..";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace User {
    interface Options {
        environment?: core.Supplier<environments.ElevenLabsEnvironment | string>;
        xiApiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class User {
    constructor(protected readonly _options: User.Options = {}) {}

    /**
     * Gets extended information about the users subscription
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    public async getSubscription(
        requestOptions?: User.RequestOptions
    ): Promise<ElevenLabs.ExtendedSubscriptionResponseModel> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                "v1/user/subscription"
            ),
            method: "GET",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.xiApiKey)) != null
                        ? await core.Supplier.get(this._options.xiApiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as ElevenLabs.ExtendedSubscriptionResponseModel;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new ElevenLabs.UnprocessableEntityError(
                        _response.error.body as ElevenLabs.HttpValidationError
                    );
                default:
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ElevenLabsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ElevenLabsTimeoutError();
            case "unknown":
                throw new errors.ElevenLabsError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets information about the user
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    public async get(requestOptions?: User.RequestOptions): Promise<ElevenLabs.UserResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                "v1/user"
            ),
            method: "GET",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.xiApiKey)) != null
                        ? await core.Supplier.get(this._options.xiApiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as ElevenLabs.UserResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new ElevenLabs.UnprocessableEntityError(
                        _response.error.body as ElevenLabs.HttpValidationError
                    );
                default:
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ElevenLabsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ElevenLabsTimeoutError();
            case "unknown":
                throw new errors.ElevenLabsError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
