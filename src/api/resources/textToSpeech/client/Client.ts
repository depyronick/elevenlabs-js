/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import * as stream from "stream";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as serializers from "../../../../serialization/index";

export declare namespace TextToSpeech {
    interface Options {
        environment?: core.Supplier<environments.ElevenLabsEnvironment | string>;
        /** Override the xi-api-key header */
        apiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the xi-api-key header */
        apiKey?: string | undefined;
    }
}

export class TextToSpeech {
    constructor(protected readonly _options: TextToSpeech.Options = {}) {}

    /**
     * Converts text into speech using a voice of your choice and returns audio.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    public async convert(
        voiceId: string,
        request: ElevenLabs.TextToSpeechRequest,
        requestOptions?: TextToSpeech.RequestOptions
    ): Promise<stream.Readable> {
        const {
            enable_logging: enableLogging,
            optimize_streaming_latency: optimizeStreamingLatency,
            output_format: outputFormat,
            ..._body
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (enableLogging != null) {
            _queryParams["enable_logging"] = enableLogging.toString();
        }

        if (optimizeStreamingLatency != null) {
            _queryParams["optimize_streaming_latency"] = optimizeStreamingLatency;
        }

        if (outputFormat != null) {
            _queryParams["output_format"] = outputFormat;
        }

        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/text-to-speech/${encodeURIComponent(voiceId)}`
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "0.20.0",
                "User-Agent": "elevenlabs/0.20.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: _body,
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
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
     * Converts text into speech using a voice of your choice and returns JSON containing audio as a base64 encoded string together with information on when which character was spoken.
     *
     * @param {string} voiceId - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {ElevenLabs.TextToSpeechWithTimestampsRequest} request
     * @param {TextToSpeech.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.textToSpeech.convertWithTimestamps("21m00Tcm4TlvDq8ikWAM", {
     *         text: "text"
     *     })
     */
    public async convertWithTimestamps(
        voiceId: string,
        request: ElevenLabs.TextToSpeechWithTimestampsRequest,
        requestOptions?: TextToSpeech.RequestOptions
    ): Promise<unknown> {
        const {
            enable_logging: enableLogging,
            optimize_streaming_latency: optimizeStreamingLatency,
            output_format: outputFormat,
            ..._body
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (enableLogging != null) {
            _queryParams["enable_logging"] = enableLogging.toString();
        }

        if (optimizeStreamingLatency != null) {
            _queryParams["optimize_streaming_latency"] = optimizeStreamingLatency;
        }

        if (outputFormat != null) {
            _queryParams["output_format"] = outputFormat;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/text-to-speech/${encodeURIComponent(voiceId)}/with-timestamps`
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "0.20.0",
                "User-Agent": "elevenlabs/0.20.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
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
     * Converts text into speech using a voice of your choice and returns audio as an audio stream.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    public async convertAsStream(
        voiceId: string,
        request: ElevenLabs.StreamTextToSpeechRequest,
        requestOptions?: TextToSpeech.RequestOptions
    ): Promise<stream.Readable> {
        const {
            enable_logging: enableLogging,
            optimize_streaming_latency: optimizeStreamingLatency,
            output_format: outputFormat,
            ..._body
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (enableLogging != null) {
            _queryParams["enable_logging"] = enableLogging.toString();
        }

        if (optimizeStreamingLatency != null) {
            _queryParams["optimize_streaming_latency"] = optimizeStreamingLatency;
        }

        if (outputFormat != null) {
            _queryParams["output_format"] = outputFormat;
        }

        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/text-to-speech/${encodeURIComponent(voiceId)}/stream`
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "0.20.0",
                "User-Agent": "elevenlabs/0.20.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: _body,
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
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
     * Converts text into speech using a voice of your choice and returns a stream of JSONs containing audio as a base64 encoded string together with information on when which character was spoken.
     */
    public async streamWithTimestamps(
        voiceId: string,
        request: ElevenLabs.StreamTextToSpeechWithTimstampsRequest,
        requestOptions?: TextToSpeech.RequestOptions
    ): Promise<core.Stream<ElevenLabs.TextToSpeechStreamWithTimestampsResponse>> {
        const {
            enable_logging: enableLogging,
            optimize_streaming_latency: optimizeStreamingLatency,
            output_format: outputFormat,
            ..._body
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (enableLogging != null) {
            _queryParams["enable_logging"] = enableLogging.toString();
        }

        if (optimizeStreamingLatency != null) {
            _queryParams["optimize_streaming_latency"] = optimizeStreamingLatency;
        }

        if (outputFormat != null) {
            _queryParams["output_format"] = outputFormat;
        }

        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/text-to-speech/${encodeURIComponent(voiceId)}/stream/with-timestamps`
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "0.20.0",
                "User-Agent": "elevenlabs/0.20.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: _body,
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.TextToSpeechStreamWithTimestampsResponse.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "json",
                    messageTerminator: "\n",
                },
            });
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
