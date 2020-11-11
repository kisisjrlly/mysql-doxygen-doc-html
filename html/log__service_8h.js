var log__service_8h =
[
    [ "s_mysql_log_service", "structs__mysql__log__service.html", "structs__mysql__log__service" ],
    [ "log_service_chistics", "log__service_8h.html#aa26bd6cc021934a32c6dd31d9321f0f8", null ],
    [ "log_service_error", "log__service_8h.html#ae4871f54cbb0619a0c304c2818298685", null ],
    [ "mysql_service_log_service_t", "log__service_8h.html#a1a3ad954432369f81adf5e0a5aad8bee", null ],
    [ "enum_log_service_chistics", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699", [
      [ "LOG_SERVICE_UNSPECIFIED", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a3f18733ea1cee3d414819effa73f324d", null ],
      [ "LOG_SERVICE_READ_ONLY", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a43dac9b21bdd7f363add3d6ea8bf1a83", null ],
      [ "LOG_SERVICE_SINGLETON", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a4d78a980fa14fe095df67e8946302901", null ],
      [ "LOG_SERVICE_BUILTIN", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a5108ac36a31a8b82c301e6d1c2900404", null ],
      [ "LOG_SERVICE_SOURCE", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a43ef3214c5b04922c2fefc6b3416ab29", null ],
      [ "LOG_SERVICE_FILTER", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699afebbfe816420e5151d58d3cc1b33438f", null ],
      [ "LOG_SERVICE_SINK", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a2ecb7139e81cf16a89377796da1c159c", null ],
      [ "LOG_SERVICE_PFS_SUPPORT", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a5e2033d4261c8edd949dd722bdb186cb", null ],
      [ "LOG_SERVICE_LOG_PARSER", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a386bc9169adc08818ced27c902884bbd", null ],
      [ "LOG_SERVICE_BUFFER", "log__service_8h.html#a70e9421c794d5a3481ecb42c46597699a32c3673468f0b3298d620678777781f8", null ]
    ] ],
    [ "enum_log_service_error", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7e", [
      [ "LOG_SERVICE_SUCCESS", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7eaf2300477dd1df8dfb47f83789e3e9d79", null ],
      [ "LOG_SERVICE_MISC_ERROR", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea83b3fcef862cfb06a1c7b54885666e50", null ],
      [ "LOG_SERVICE_NOTHING_DONE", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7eaf3d8c1ab2879690b51acdeddc70be2b2", null ],
      [ "LOG_SERVICE_BUFFER_SIZE_INSUFFICIENT", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea076c418f536a2518c72f71b48da636eb", null ],
      [ "LOG_SERVICE_OUT_OF_MEMORY", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ead2ea86b26bcfc869843efb54adef327e", null ],
      [ "LOG_SERVICE_NOT_AVAILABLE", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea7e84f55e04893612f12a8eeb98fd93cb", null ],
      [ "LOG_SERVICE_UNSUPPORTED_MODE", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea19ef249093e24efdd23cff0cfe5045ae", null ],
      [ "LOG_SERVICE_INVALID_ARGUMENT", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7eade104133b4b27e30cc68d631c9a30a8d", null ],
      [ "LOG_SERVICE_ARGUMENT_TOO_LONG", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea630f35235a6cc654cfc2d00015f13ce9", null ],
      [ "LOG_SERVICE_PARSE_ERROR", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea43e0b67c3baa1e8b9ec8f3d3e0b94b9b", null ],
      [ "LOG_SERVICE_COULD_NOT_MAKE_LOG_NAME", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea96c35c346867fdebe3bc6a41d9b79aad", null ],
      [ "LOG_SERVICE_LOCK_ERROR", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea152a7958bbc44295a90952f4613425f0", null ],
      [ "LOG_SERVICE_UNABLE_TO_WRITE", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7eaf5c23616159eda4a4dc8fbd9555b22a7", null ],
      [ "LOG_SERVICE_UNABLE_TO_READ", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea22e583071bed9213880df38b0eab0f90", null ],
      [ "LOG_SERVICE_OPEN_FAILED", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea17255adf45ab68762e93423a345f33ec", null ],
      [ "LOG_SERVICE_CLOSE_FAILED", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea75176e60b2d38b6cab338dab02b12d65", null ],
      [ "LOG_SERVICE_SEEK_FAILED", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea5c4e59ecb162cb7c9c12ccaf025a9bd1", null ],
      [ "LOG_SERVICE_TOO_MANY_INSTANCES", "log__service_8h.html#a8e3f4d31169f521f7368fd88b4485c7ea5c2fe04aeee16fa0ae374c731994b23c", null ]
    ] ]
];