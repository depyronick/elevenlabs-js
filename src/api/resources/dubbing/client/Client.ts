/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { default as FormData } from "form-data";
import * as stream from "stream";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as environments from "../../../../environments";
import * as errors from "../../../../errors/index";
import * as ElevenLabs from "../../../index";

export declare namespace Dubbing {
    interface Options {
        environment?: core.Supplier<environments.ElevenLabsEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Dubbing {
    constructor(protected readonly _options: Dubbing.Options = {}) {}

    /**
     * Dubs provided audio or video file into given language.
     *
     * @param {ElevenLabs.BodyDubAVideoOrAnAudioFileV1DubbingPost} request
     * @param {Dubbing.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.dubbing.dubAVideoOrAnAudioFile(fs.createReadStream("/path/to/your/file"), fs.createReadStream("/path/to/your/file"), fs.createReadStream("/path/to/your/file"), fs.createReadStream("/path/to/your/file"), {
     *         target_lang: "target_lang"
     *     })
     */
    public async dubAVideoOrAnAudioFile(
        request: ElevenLabs.BodyDubAVideoOrAnAudioFileV1DubbingPost,
        requestOptions?: Dubbing.RequestOptions
    ): Promise<ElevenLabs.DoDubbingResponse> {
        const _request = new FormData();
        if (request.mode != null) {
            _request.append("mode", request.mode);
        }

        if (request.file != null) {
            _request.append("file", request.file);
        }

        if (request.csvFile != null) {
            _request.append("csv_file", request.csvFile);
        }

        if (request.foregroundAudioFile != null) {
            _request.append("foreground_audio_file", request.foregroundAudioFile);
        }

        if (request.backgroundAudioFile != null) {
            _request.append("background_audio_file", request.backgroundAudioFile);
        }

        if (request.name != null) {
            _request.append("name", request.name);
        }

        if (request.source_url != null) {
            _request.append("source_url", request.source_url);
        }

        if (request.source_lang != null) {
            _request.append("source_lang", request.source_lang);
        }

        _request.append("target_lang", request.target_lang);
        if (request.num_speakers != null) {
            _request.append("num_speakers", request.num_speakers.toString());
        }

        if (request.watermark != null) {
            _request.append("watermark", request.watermark.toString());
        }

        if (request.start_time != null) {
            _request.append("start_time", request.start_time.toString());
        }

        if (request.end_time != null) {
            _request.append("end_time", request.end_time.toString());
        }

        if (request.highest_resolution != null) {
            _request.append("highest_resolution", request.highest_resolution.toString());
        }

        if (request.dubbing_studio != null) {
            _request.append("dubbing_studio", request.dubbing_studio.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                "v1/dubbing"
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "v0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "multipart/form-data; boundary=" + _request.getBoundary(),
            body: _request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as ElevenLabs.DoDubbingResponse;
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
     * Returns metadata about a dubbing project, including whether it's still in progress or not
     *
     * @param {string} dubbingId - ID of the dubbing project.
     * @param {Dubbing.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.dubbing.getDubbingProjectMetadata("dubbing_id")
     */
    public async getDubbingProjectMetadata(
        dubbingId: string,
        requestOptions?: Dubbing.RequestOptions
    ): Promise<ElevenLabs.DubbingMetadataResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/dubbing/${encodeURIComponent(dubbingId)}`
            ),
            method: "GET",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "v0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as ElevenLabs.DubbingMetadataResponse;
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
     * Deletes a dubbing project.
     *
     * @param {string} dubbingId - ID of the dubbing project.
     * @param {Dubbing.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.dubbing.deleteDubbingProject("dubbing_id")
     */
    public async deleteDubbingProject(dubbingId: string, requestOptions?: Dubbing.RequestOptions): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/dubbing/${encodeURIComponent(dubbingId)}`
            ),
            method: "DELETE",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "v0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
     * Returns dubbed file as a streamed file. Videos will be returned in MP4 format and audio only dubs will be returned in MP3.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    public async getDubbedFile(
        dubbingId: string,
        languageCode: string,
        requestOptions?: Dubbing.RequestOptions
    ): Promise<stream.Readable> {
        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/dubbing/${encodeURIComponent(dubbingId)}/audio/${encodeURIComponent(languageCode)}`
            ),
            method: "GET",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "v0.5.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
}
