var session__tracker_8h =
[
    [ "State_tracker", "classState__tracker.html", "classState__tracker" ],
    [ "Session_tracker", "classSession__tracker.html", "classSession__tracker" ],
    [ "Session_state_change_tracker", "classSession__state__change__tracker.html", "classSession__state__change__tracker" ],
    [ "Transaction_state_tracker", "classTransaction__state__tracker.html", "classTransaction__state__tracker" ],
    [ "SESSION_TRACKER_END", "session__tracker_8h.html#a125fed5cf7cf1a393a8d4794f154db32", null ],
    [ "TX_TRACKER_GET", "session__tracker_8h.html#afe0db53d512ed04d36029c0fc6fc0a54", null ],
    [ "enum_session_track_transaction_info", "session__tracker_8h.html#ab4df61ebc6b6ee253dfb30a681a53e45", [
      [ "TX_TRACK_NONE", "session__tracker_8h.html#ab4df61ebc6b6ee253dfb30a681a53e45af831a77e611cdd041492f4b0dd3a69d6", null ],
      [ "TX_TRACK_STATE", "session__tracker_8h.html#ab4df61ebc6b6ee253dfb30a681a53e45a135c16cd171d9450b546c58d63b1e420", null ],
      [ "TX_TRACK_CHISTICS", "session__tracker_8h.html#ab4df61ebc6b6ee253dfb30a681a53e45a76615f2f4535dfbb18a18b3df55ac0a3", null ]
    ] ],
    [ "enum_session_tracker", "session__tracker_8h.html#a130414c1d880e7d73418715632809d85", [
      [ "SESSION_SYSVARS_TRACKER", "session__tracker_8h.html#a130414c1d880e7d73418715632809d85aff07af6d6989c5f3dbe6fb28a511afcd", null ],
      [ "CURRENT_SCHEMA_TRACKER", "session__tracker_8h.html#a130414c1d880e7d73418715632809d85a778ded8f19fc955590ee0fdcb2459e86", null ],
      [ "SESSION_STATE_CHANGE_TRACKER", "session__tracker_8h.html#a130414c1d880e7d73418715632809d85a49fd1a7e0ac84f8553fb9bf62829dd3d", null ],
      [ "SESSION_GTIDS_TRACKER", "session__tracker_8h.html#a130414c1d880e7d73418715632809d85a25b28ea433f1c7c2d9f0fe0f359f48a6", null ],
      [ "TRANSACTION_INFO_TRACKER", "session__tracker_8h.html#a130414c1d880e7d73418715632809d85abe7eed2693064a2d72705980cd1e459c", null ]
    ] ],
    [ "enum_tx_isol_level", "session__tracker_8h.html#a93cc74ec0b1ce4d9a390ba303ab5375e", [
      [ "TX_ISOL_INHERIT", "session__tracker_8h.html#a93cc74ec0b1ce4d9a390ba303ab5375ea1ded95933b03d5e5941f0859f7d0e07c", null ],
      [ "TX_ISOL_UNCOMMITTED", "session__tracker_8h.html#a93cc74ec0b1ce4d9a390ba303ab5375ea6853d8ee231ae271a9b360ea96b8e385", null ],
      [ "TX_ISOL_COMMITTED", "session__tracker_8h.html#a93cc74ec0b1ce4d9a390ba303ab5375ea9e77a1b62d4fb4e830a1c135fda5f0f6", null ],
      [ "TX_ISOL_REPEATABLE", "session__tracker_8h.html#a93cc74ec0b1ce4d9a390ba303ab5375ea9e8344ab82e0535e980c337dcc6de038", null ],
      [ "TX_ISOL_SERIALIZABLE", "session__tracker_8h.html#a93cc74ec0b1ce4d9a390ba303ab5375eac0c042a5b83eb9df58059b013a435aa6", null ]
    ] ],
    [ "enum_tx_read_flags", "session__tracker_8h.html#ae5c6a0f11a70babed527191beb810fef", [
      [ "TX_READ_INHERIT", "session__tracker_8h.html#ae5c6a0f11a70babed527191beb810fefa03967bfba671f7f1e8100ca9175e4962", null ],
      [ "TX_READ_ONLY", "session__tracker_8h.html#ae5c6a0f11a70babed527191beb810fefa11760ca029e5398eb18957b8e6373158", null ],
      [ "TX_READ_WRITE", "session__tracker_8h.html#ae5c6a0f11a70babed527191beb810fefaa94fcee2cab0c9fd8510e2be93a10233", null ]
    ] ],
    [ "enum_tx_state", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2", [
      [ "TX_EMPTY", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a3edc6820507011754961fe952f37e3c8", null ],
      [ "TX_EXPLICIT", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a493ee7c80ccb6652d5783ec9cbf1a29d", null ],
      [ "TX_IMPLICIT", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a90fe1ca4693c56eaa8659aa074fa2ffd", null ],
      [ "TX_READ_TRX", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2ae81fe639d62aabf7efc67593f01a7d18", null ],
      [ "TX_READ_UNSAFE", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a0eddfc0acf63074b890d3c8b2211b33d", null ],
      [ "TX_WRITE_TRX", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a782a25d8b0aa62f7b4b3e879e77ba46c", null ],
      [ "TX_WRITE_UNSAFE", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a4ef52eda0f42cf99d86d33620d0083c2", null ],
      [ "TX_STMT_UNSAFE", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2aa231cc2605a2d65ca0e7f58f47f9973e", null ],
      [ "TX_RESULT_SET", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a96dab3311eb9861bfff43e378579d431", null ],
      [ "TX_WITH_SNAPSHOT", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a7dd8ff5e4dbd5884f5b02be3289fa443", null ],
      [ "TX_LOCKED_TABLES", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a795a6983ab8fd18d3327c8d9fcec231a", null ],
      [ "TX_STMT_DML", "session__tracker_8h.html#af7fa41f56ecf73717bb0b9436c6d02d2a3266c187017ec599e38fe06fa253c109", null ]
    ] ]
];