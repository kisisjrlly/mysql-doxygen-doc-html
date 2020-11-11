var rpl__channel__service__interface_8h =
[
    [ "Channel_ssl_info", "structChannel__ssl__info.html", "structChannel__ssl__info" ],
    [ "Channel_creation_info", "structChannel__creation__info.html", "structChannel__creation__info" ],
    [ "Channel_connection_info", "structChannel__connection__info.html", "structChannel__connection__info" ],
    [ "REPLICATION_THREAD_WAIT_NO_INFO_ERROR", "rpl__channel__service__interface_8h.html#a23068adc9a5ee2815bf09b843ccf8f6f", null ],
    [ "REPLICATION_THREAD_WAIT_TIMEOUT_ERROR", "rpl__channel__service__interface_8h.html#a3ce4206816cfb37e1364cbff8e0b1899", null ],
    [ "RPL_CHANNEL_SERVICE_CHANNEL_DOES_NOT_EXISTS_ERROR", "rpl__channel__service__interface_8h.html#af7d309cb422c486d0a455361f5dc9c3b", null ],
    [ "RPL_CHANNEL_SERVICE_DEFAULT_CHANNEL_CREATION_ERROR", "rpl__channel__service__interface_8h.html#aa6a0d171decaeec89c2aec070165d604", null ],
    [ "RPL_CHANNEL_SERVICE_RECEIVER_CONNECTION_ERROR", "rpl__channel__service__interface_8h.html#ac5956e223b474a8744f5b50b97ad4802", null ],
    [ "RPL_CHANNEL_SERVICE_SLAVE_SKIP_COUNTER_ACTIVE", "rpl__channel__service__interface_8h.html#a5acb074a250c4e014b168212e7520ce6", null ],
    [ "RPL_SERVICE_SERVER_DEFAULT", "rpl__channel__service__interface_8h.html#a979632e57fc7117efaeac7f320d3451c", null ],
    [ "enum_channel_thread_types", "rpl__channel__service__interface_8h.html#af84aedcdbca001bef53a5b47bd55e6a2", [
      [ "CHANNEL_NO_THD", "rpl__channel__service__interface_8h.html#af84aedcdbca001bef53a5b47bd55e6a2a39db5324222c4fface9b1774fdf5ec58", null ],
      [ "CHANNEL_RECEIVER_THREAD", "rpl__channel__service__interface_8h.html#af84aedcdbca001bef53a5b47bd55e6a2aa5dc4c1ca24f449eef51e487532904f7", null ],
      [ "CHANNEL_APPLIER_THREAD", "rpl__channel__service__interface_8h.html#af84aedcdbca001bef53a5b47bd55e6a2ab12024067707ea4c3d93aa381e7cd008", null ]
    ] ],
    [ "enum_channel_type", "rpl__channel__service__interface_8h.html#a6482d3069d61df68b553e807f0fb176a", [
      [ "SLAVE_REPLICATION_CHANNEL", "rpl__channel__service__interface_8h.html#a6482d3069d61df68b553e807f0fb176aaf8e4f44686c4f07a424bbaf35200fb54", null ],
      [ "GROUP_REPLICATION_CHANNEL", "rpl__channel__service__interface_8h.html#a6482d3069d61df68b553e807f0fb176aad794c07a436eb77aa32e0bdcf89aa656", null ]
    ] ],
    [ "enum_channel_until_condition", "rpl__channel__service__interface_8h.html#a0f3054fb3a9fc66ef6c2d62a98dc62cf", [
      [ "CHANNEL_NO_UNTIL_CONDITION", "rpl__channel__service__interface_8h.html#a0f3054fb3a9fc66ef6c2d62a98dc62cfaec450107bd521e06db9994ccb1990224", null ],
      [ "CHANNEL_UNTIL_APPLIER_BEFORE_GTIDS", "rpl__channel__service__interface_8h.html#a0f3054fb3a9fc66ef6c2d62a98dc62cfa913dd2ecc7f33801108504b9a0f5137f", null ],
      [ "CHANNEL_UNTIL_APPLIER_AFTER_GTIDS", "rpl__channel__service__interface_8h.html#a0f3054fb3a9fc66ef6c2d62a98dc62cfa802d01ea0f9a6c80970535bac1a0b57d", null ],
      [ "CHANNEL_UNTIL_APPLIER_AFTER_GAPS", "rpl__channel__service__interface_8h.html#a0f3054fb3a9fc66ef6c2d62a98dc62cfa0903dff37902f89af26465b4ebd39ebb", null ],
      [ "CHANNEL_UNTIL_VIEW_ID", "rpl__channel__service__interface_8h.html#a0f3054fb3a9fc66ef6c2d62a98dc62cfa2f0bceb46bda049f5adb90e012b6b0df", null ]
    ] ],
    [ "enum_multi_threaded_workers_type", "rpl__channel__service__interface_8h.html#af2c3fb205c8729c8eb8a62f184e9c2e0", [
      [ "CHANNEL_MTS_PARALLEL_TYPE_DB_NAME", "rpl__channel__service__interface_8h.html#af2c3fb205c8729c8eb8a62f184e9c2e0ae1367d859f92edcf29f8597a1242cc62", null ],
      [ "CHANNEL_MTS_PARALLEL_TYPE_LOGICAL_CLOCK", "rpl__channel__service__interface_8h.html#af2c3fb205c8729c8eb8a62f184e9c2e0a64706db8c2f69a25db6f21a5c0117ae7", null ]
    ] ],
    [ "enum_slave_channel_status", "rpl__channel__service__interface_8h.html#a62a61f645c8012fc506213211ae5f96c", [
      [ "SLAVE_CHANNEL_NO_APPLIER_RUNNING_AND_NO_OPEN_TEMPORARY_TABLE", "rpl__channel__service__interface_8h.html#a62a61f645c8012fc506213211ae5f96cab132538bce0dd236155a3ed4cdcafddb", null ],
      [ "SLAVE_CHANNEL_APPLIER_IS_RUNNING", "rpl__channel__service__interface_8h.html#a62a61f645c8012fc506213211ae5f96ca24777ca7ac898a9dd478fbad1db395a0", null ],
      [ "SLAVE_CHANNEL_HAS_OPEN_TEMPORARY_TABLE", "rpl__channel__service__interface_8h.html#a62a61f645c8012fc506213211ae5f96ca23eea2514a0465f3841cd6c978be9b06", null ]
    ] ],
    [ "binlog_dump_thread_kill", "rpl__channel__service__interface_8h.html#a3c96a6f5b111344ba9135340fbc8fc14", null ],
    [ "channel_add_executed_gtids_to_received_gtids", "rpl__channel__service__interface_8h.html#a65d9f0eff2260def32afdb2fe5f28e27", null ],
    [ "channel_create", "rpl__channel__service__interface_8h.html#a5582b0da35e798d41aff1f519884c790", null ],
    [ "channel_delete_credentials", "rpl__channel__service__interface_8h.html#a3dd76aea68a89fd5b09c0b36e84f5743", null ],
    [ "channel_flush", "rpl__channel__service__interface_8h.html#a9c1bf92d55db30a4531433823c0718d3", null ],
    [ "channel_get_credentials", "rpl__channel__service__interface_8h.html#af07a0532ed765ddf26b172624be2b080", null ],
    [ "channel_get_last_delivered_gno", "rpl__channel__service__interface_8h.html#ac768b321c185a4a086768855518d84ca", null ],
    [ "channel_get_retrieved_gtid_set", "rpl__channel__service__interface_8h.html#ab8e679337808fc63f763bfc0ffbe6590", null ],
    [ "channel_get_thread_id", "rpl__channel__service__interface_8h.html#a67a8073f473002c90d6aa720355e9211", null ],
    [ "channel_is_active", "rpl__channel__service__interface_8h.html#ae05673eccaa625528b2bb1fb9ae02112", null ],
    [ "channel_is_applier_thread_waiting", "rpl__channel__service__interface_8h.html#a56493536a38a7d13c24474ace5509987", null ],
    [ "channel_is_applier_waiting", "rpl__channel__service__interface_8h.html#adbe46a0f556743c610e1ed5dae7fea85", null ],
    [ "channel_is_stopping", "rpl__channel__service__interface_8h.html#ab2a0791809028248f9730da9850ea1ba", null ],
    [ "channel_purge_queue", "rpl__channel__service__interface_8h.html#a9bfc4c750fce3ac566f9d9c321d8856d", null ],
    [ "channel_queue_packet", "rpl__channel__service__interface_8h.html#a04af67ef7fc4e5d4154182b212f46f3c", null ],
    [ "channel_start", "rpl__channel__service__interface_8h.html#ad635570f7d059b00e53e94d941c87550", null ],
    [ "channel_stop", "rpl__channel__service__interface_8h.html#a39158cf38c79efe82c654492e41e4f25", null ],
    [ "channel_stop_all", "rpl__channel__service__interface_8h.html#a8e017d04e8157d3635bd9688189f0a5b", null ],
    [ "channel_wait_until_apply_queue_applied", "rpl__channel__service__interface_8h.html#a28eab55748b70f098fadf7ef24343f6e", null ],
    [ "channel_wait_until_transactions_applied", "rpl__channel__service__interface_8h.html#a0891faddb61c3984958b129f1f2029cd", null ],
    [ "has_any_slave_channel_open_temp_table_or_is_its_applier_running", "rpl__channel__service__interface_8h.html#aa3ae6a3c60d6b6d0a26d5fe39b137eab", null ],
    [ "initialize_channel_connection_info", "rpl__channel__service__interface_8h.html#a3b03580369eaa7ad3b81dda48e6a488c", null ],
    [ "initialize_channel_creation_info", "rpl__channel__service__interface_8h.html#a823581be5e6b2d17e3ef1d3e846e028f", null ],
    [ "initialize_channel_service_interface", "rpl__channel__service__interface_8h.html#aeda15d529ddd21633d47fa06ee24406f", null ],
    [ "initialize_channel_ssl_info", "rpl__channel__service__interface_8h.html#a8bbf8b296eefa8889813a5fe1ed45a69", null ],
    [ "is_any_slave_channel_running", "rpl__channel__service__interface_8h.html#a298928e25ffdffc3fe1dd1a90847829b", null ],
    [ "is_partial_transaction_on_channel_relay_log", "rpl__channel__service__interface_8h.html#ac8b37136aff8ce565ff4e323025d82bb", null ]
];