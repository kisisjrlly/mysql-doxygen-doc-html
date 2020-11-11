var classTransaction__boundary__parser =
[
    [ "enum_event_boundary_type", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338", [
      [ "EVENT_BOUNDARY_TYPE_ERROR", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338a2fe9c7f8b670d9b08a913b6d66ff447c", null ],
      [ "EVENT_BOUNDARY_TYPE_GTID", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338a2d8b19b4aa1e8a09769fcf3c6320f58c", null ],
      [ "EVENT_BOUNDARY_TYPE_BEGIN_TRX", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338a71960da8d29dc1e149faa1db3f039df9", null ],
      [ "EVENT_BOUNDARY_TYPE_END_TRX", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338aec5b4e14757df79eae4af9081265780e", null ],
      [ "EVENT_BOUNDARY_TYPE_END_XA_TRX", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338ac69242230c21f06d52b3b8e52d881457", null ],
      [ "EVENT_BOUNDARY_TYPE_PRE_STATEMENT", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338a957754544075590b4228aab625d530a4", null ],
      [ "EVENT_BOUNDARY_TYPE_STATEMENT", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338acea8e4d2e6fc3ff5a163f33babbd86ad", null ],
      [ "EVENT_BOUNDARY_TYPE_INCIDENT", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338abf16d5be57657644943e104db5f9fc36", null ],
      [ "EVENT_BOUNDARY_TYPE_IGNORE", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338ac79931dd3964d6900481b5d45fa7632f", null ],
      [ "EVENT_BOUNDARY_TYPE_TRANSACTION_PAYLOAD", "classTransaction__boundary__parser.html#a158b3ac2a2dcc1b74247b1c5ef385338a7ae22547ee4cc491d090ce596d61d07e", null ]
    ] ],
    [ "enum_event_parser_error", "classTransaction__boundary__parser.html#a62eb273b9ee7a093f3fa65869f8afbc5", [
      [ "ER_TRX_BOUND_UNSUPPORTED_UNIGNORABLE_EVENT_IN_STREAM", "classTransaction__boundary__parser.html#a62eb273b9ee7a093f3fa65869f8afbc5aa784091abb85a3ae3bc4de053aa014cf", null ],
      [ "ER_TRX_BOUND_GTID_LOG_EVENT_IN_STREAM", "classTransaction__boundary__parser.html#a62eb273b9ee7a093f3fa65869f8afbc5a416c15f7569d9a54e1c455a786cebec2", null ],
      [ "ER_TRX_BOUND_UNEXPECTED_BEGIN_IN_STREAM", "classTransaction__boundary__parser.html#a62eb273b9ee7a093f3fa65869f8afbc5a432c019b625bf1ed95b07f662fd43104", null ],
      [ "ER_TRX_BOUND_UNEXPECTED_COMMIT_ROLLBACK_OR_XID_LOG_EVENT_IN_STREAM", "classTransaction__boundary__parser.html#a62eb273b9ee7a093f3fa65869f8afbc5acc91f4bbf5033177707a6df7913dfccf", null ],
      [ "ER_TRX_BOUND_UNEXPECTED_XA_ROLLBACK_IN_STREAM", "classTransaction__boundary__parser.html#a62eb273b9ee7a093f3fa65869f8afbc5a2d052a77f71715c7aafff83c968401a7", null ]
    ] ],
    [ "enum_event_parser_state", "classTransaction__boundary__parser.html#ad28b0f83c785e9e9665039f60bf60f53", [
      [ "EVENT_PARSER_NONE", "classTransaction__boundary__parser.html#ad28b0f83c785e9e9665039f60bf60f53adb6668387d76b6a03c812e5b4f4c7f8f", null ],
      [ "EVENT_PARSER_GTID", "classTransaction__boundary__parser.html#ad28b0f83c785e9e9665039f60bf60f53a3da7b3bb3253a83a3a0f78a79a286f4c", null ],
      [ "EVENT_PARSER_DDL", "classTransaction__boundary__parser.html#ad28b0f83c785e9e9665039f60bf60f53a168d095d0f1626a7dcb54f564f7e19dc", null ],
      [ "EVENT_PARSER_DML", "classTransaction__boundary__parser.html#ad28b0f83c785e9e9665039f60bf60f53a57c2e83e93c251e1e5cd08f75453f9b5", null ],
      [ "EVENT_PARSER_ERROR", "classTransaction__boundary__parser.html#ad28b0f83c785e9e9665039f60bf60f53a5f762813e6957bc97eee0aa72d88282d", null ]
    ] ],
    [ "enum_trx_boundary_parser_context", "classTransaction__boundary__parser.html#afe208824b4edc282d6b68c2306f1d1af", [
      [ "TRX_BOUNDARY_PARSER_RECEIVER", "classTransaction__boundary__parser.html#afe208824b4edc282d6b68c2306f1d1afa2e3b20b1a72a7fc61aae0d5669615844", null ],
      [ "TRX_BOUNDARY_PARSER_APPLIER", "classTransaction__boundary__parser.html#afe208824b4edc282d6b68c2306f1d1afacfe1c4db8b6a372293696e3dfe311124", null ]
    ] ],
    [ "Transaction_boundary_parser", "classTransaction__boundary__parser.html#ab49255ce28fcbf867c0aa927284dcb7c", null ],
    [ "~Transaction_boundary_parser", "classTransaction__boundary__parser.html#aa9e0969dfeecbcf65e39784a18316412", null ],
    [ "check_row_logging_constraints", "classTransaction__boundary__parser.html#a739fefb8764d02ba0459993e41dc2193", null ],
    [ "feed_event", "classTransaction__boundary__parser.html#a4984905e50caed6b73187c2b6b4bd08f", null ],
    [ "get_event_boundary_type", "classTransaction__boundary__parser.html#ad40ac9f9c5695517b293b2983c7a0d95", null ],
    [ "is_error", "classTransaction__boundary__parser.html#a2d48eeaf3ec9467405a617d834dfdab4", null ],
    [ "is_inside_transaction", "classTransaction__boundary__parser.html#aa801e6b1fa7d54ebd3c586854945c7b7", null ],
    [ "is_not_inside_transaction", "classTransaction__boundary__parser.html#a59249ee780e4ba4af0d3d3fb69b6a2d2", null ],
    [ "log_server_warning", "classTransaction__boundary__parser.html#acb0aec2fdcce37bfa6082c7736ef5087", null ],
    [ "reset", "classTransaction__boundary__parser.html#aeaef08e74aca6c66acaacd3d8c7d9faa", null ],
    [ "rollback", "classTransaction__boundary__parser.html#a089dacb71d30f036dd2a342c91a2e8f3", null ],
    [ "update_state", "classTransaction__boundary__parser.html#a4b60c1ae8cb2fd28793af6a4259e9f7b", null ],
    [ "current_parser_state", "classTransaction__boundary__parser.html#a686bcc5446bdebec584b1b9e98b3b576", null ],
    [ "last_parser_state", "classTransaction__boundary__parser.html#a19652789389cd6e4a725f18fdf7b6249", null ],
    [ "m_current_boundary_state", "classTransaction__boundary__parser.html#a7028ee1906e8a12f7cfa24c56876ff74", null ],
    [ "m_trx_boundary_parser_context", "classTransaction__boundary__parser.html#ae6ce1f380863430a5f9bc2804e7a6516", null ]
];