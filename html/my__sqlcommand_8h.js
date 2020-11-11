var my__sqlcommand_8h =
[
    [ "enum_sql_command", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122a", [
      [ "SQLCOM_SELECT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa6dabfa0eb123d14bca555866465e6c72", null ],
      [ "SQLCOM_CREATE_TABLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aae627c9a148cc1105ba3c7a9f9a3d6411", null ],
      [ "SQLCOM_CREATE_INDEX", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa8c1c5035f070ea80a222d9cf68392059", null ],
      [ "SQLCOM_ALTER_TABLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa0887053ad161dfdd1c25980c9d8158e8", null ],
      [ "SQLCOM_UPDATE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa0b41aad0d4bbe0e1a1bbe8321a16f43b", null ],
      [ "SQLCOM_INSERT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa4491a2e96474b43d471697a8b856a9f5", null ],
      [ "SQLCOM_INSERT_SELECT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa640957502bc9d03b25c86a965be655fd", null ],
      [ "SQLCOM_DELETE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa3dbb893f08aa55726d953a6101e6ae29", null ],
      [ "SQLCOM_TRUNCATE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aae5bb4bff9e9b851628951d6da4c8a805", null ],
      [ "SQLCOM_DROP_TABLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa550da7237e9ab44e6fd88386dba08be6", null ],
      [ "SQLCOM_DROP_INDEX", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aae672bca2ff5f62bf60976a1664fa4092", null ],
      [ "SQLCOM_SHOW_DATABASES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa4f570f78d2b75fcce76839a7d31e6eed", null ],
      [ "SQLCOM_SHOW_TABLES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aab9aac9b4d81a83b398f9879374ae2ce6", null ],
      [ "SQLCOM_SHOW_FIELDS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa81cb09ee9e2878a70909974e7439cba0", null ],
      [ "SQLCOM_SHOW_KEYS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaadec3877ed60098d712e8d11e85c83cc", null ],
      [ "SQLCOM_SHOW_VARIABLES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aabfb20e54e616290e82f34966f89ad221", null ],
      [ "SQLCOM_SHOW_STATUS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa8606de0e64af60e235ab6cfbbdcad3da", null ],
      [ "SQLCOM_SHOW_ENGINE_LOGS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa027e4b594ff9d4fe9fd50ebb1741521e", null ],
      [ "SQLCOM_SHOW_ENGINE_STATUS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa9447ffe4048faa43b65f153cbfbc215a", null ],
      [ "SQLCOM_SHOW_ENGINE_MUTEX", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa264161e4ab895b24067ef88283c8ffa7", null ],
      [ "SQLCOM_SHOW_PROCESSLIST", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aacc6b9d562e5938b6df10f6699ed80a00", null ],
      [ "SQLCOM_SHOW_MASTER_STAT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa83aec9a97768d331d6c6489dd479d85", null ],
      [ "SQLCOM_SHOW_SLAVE_STAT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaae06d4602e111dad35039353054711c7", null ],
      [ "SQLCOM_SHOW_GRANTS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa0639e38979e676f35a28b83ae95503ae", null ],
      [ "SQLCOM_SHOW_CREATE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aae2b4d074795b6b109fae4d566c3a79d2", null ],
      [ "SQLCOM_SHOW_CHARSETS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa5e3ce1d530125f04f037a295182256ce", null ],
      [ "SQLCOM_SHOW_COLLATIONS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa3effab9270e699c70541d5a405e3be4", null ],
      [ "SQLCOM_SHOW_CREATE_DB", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa0bc8954df0187a9f1b45eb54016dd75d", null ],
      [ "SQLCOM_SHOW_TABLE_STATUS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa6480ea87a4024c7070717e3f3fe0bf1d", null ],
      [ "SQLCOM_SHOW_TRIGGERS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aae076d0139bb384774aab42fca65b8891", null ],
      [ "SQLCOM_LOAD", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa3cbe84b9064f8a7fdeb9c15c8758e7f4", null ],
      [ "SQLCOM_SET_OPTION", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac749b2b198bb60cf1c8d9094fcbec8ec", null ],
      [ "SQLCOM_LOCK_TABLES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa3c3d86cdfca91ea5533bdcddac8c158e", null ],
      [ "SQLCOM_UNLOCK_TABLES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac8172c4c306df272c22339e7c266edc1", null ],
      [ "SQLCOM_GRANT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad987f62c5e5904d4964c676603bdbd79", null ],
      [ "SQLCOM_CHANGE_DB", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa5c3ea3f4e991252bb8ee785d696dfd1", null ],
      [ "SQLCOM_CREATE_DB", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa203a81a2337ff4af1f02b324e59fb8ed", null ],
      [ "SQLCOM_DROP_DB", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa6dafdf8ef08a1e496f0f7d622bf56888", null ],
      [ "SQLCOM_ALTER_DB", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa077df4968bc0cd4e2b879945c81aa375", null ],
      [ "SQLCOM_REPAIR", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa7e63c4be78b515d09b191a88f7d188b4", null ],
      [ "SQLCOM_REPLACE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa8b02fbdf12ecda8ee0dbf8b27a011f5f", null ],
      [ "SQLCOM_REPLACE_SELECT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aadb28969f03b4b5f1f40787276999d49b", null ],
      [ "SQLCOM_CREATE_FUNCTION", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa8fcf91a1023a95a375b2d618be229194", null ],
      [ "SQLCOM_DROP_FUNCTION", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac757113e47386994b229848ec89d75b8", null ],
      [ "SQLCOM_REVOKE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aab6ab8bf50bad497f90c82f6bc14bb8a9", null ],
      [ "SQLCOM_OPTIMIZE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa0c839fbf925a4dc36cb418bd95608622", null ],
      [ "SQLCOM_CHECK", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa0b5031f820f1689731f5bcd009ec75e0", null ],
      [ "SQLCOM_ASSIGN_TO_KEYCACHE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa70c6197fb23d1460b9200983220e6822", null ],
      [ "SQLCOM_PRELOAD_KEYS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aacdc270b5bbc7c3c8a897f2f11b50d7df", null ],
      [ "SQLCOM_FLUSH", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aab50814aeb422f3b37017055ee5bb3d42", null ],
      [ "SQLCOM_KILL", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac45effc3290f2e8daf105fc8765326dc", null ],
      [ "SQLCOM_ANALYZE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaff20d511ed63a8ae23bb103f8db94f52", null ],
      [ "SQLCOM_ROLLBACK", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa527d2b306de0f507322d7df5e76a31f0", null ],
      [ "SQLCOM_ROLLBACK_TO_SAVEPOINT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac86e2bcd806f94f7e7678a045e9de246", null ],
      [ "SQLCOM_COMMIT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aadd9ea0198a414d3e118160ff29e10e6c", null ],
      [ "SQLCOM_SAVEPOINT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaad79a54d82555682330f8ce79f9ca1a5", null ],
      [ "SQLCOM_RELEASE_SAVEPOINT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa2a0d952530f4e5ec93f57b94df9bc882", null ],
      [ "SQLCOM_SLAVE_START", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa4c6ce147f86084b01ff7744b0a3ef352", null ],
      [ "SQLCOM_SLAVE_STOP", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad0d1316718dbfc7fce81dc934ee51a79", null ],
      [ "SQLCOM_START_GROUP_REPLICATION", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa9f0a31f226e0fcce7959d35f45dedfec", null ],
      [ "SQLCOM_STOP_GROUP_REPLICATION", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaec598d5433c2fba6d3787942301a2480", null ],
      [ "SQLCOM_BEGIN", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa6140df2e66c360667bccecf8147c83a8", null ],
      [ "SQLCOM_CHANGE_MASTER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa2e464e54b82c07277ece9dcea65b798", null ],
      [ "SQLCOM_CHANGE_REPLICATION_FILTER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aabb8c0e97e035245403b11b26ea0f81f6", null ],
      [ "SQLCOM_RENAME_TABLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa94b0239496eb0862744cab5d7db2c6b5", null ],
      [ "SQLCOM_RESET", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad10d03ce6a066b6a66ee96bb1279c090", null ],
      [ "SQLCOM_PURGE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aafe229f17841016dcb4d6e8bfcd15ccfa", null ],
      [ "SQLCOM_PURGE_BEFORE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa849a0d885876ce45d8ab7f3577b8605e", null ],
      [ "SQLCOM_SHOW_BINLOGS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa30ebc6706de3ea998a55ab38ed85ca41", null ],
      [ "SQLCOM_SHOW_OPEN_TABLES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa626e8bb968dfd4cd9ef1242514f1ddf6", null ],
      [ "SQLCOM_HA_OPEN", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa924dee1021999c1d2ae34d05f4221ee7", null ],
      [ "SQLCOM_HA_CLOSE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa9be3f933f6725b106dbeb28fef344c1d", null ],
      [ "SQLCOM_HA_READ", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaf554a2bd19f431172a9e63c18fa4adce", null ],
      [ "SQLCOM_SHOW_SLAVE_HOSTS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa1fcd21ded5bff2fb4b6236f612d8bef8", null ],
      [ "SQLCOM_DELETE_MULTI", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa88bf5353e636118c64dfb42235358500", null ],
      [ "SQLCOM_UPDATE_MULTI", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aab010c224c5dde0e6c1849810d206964b", null ],
      [ "SQLCOM_SHOW_BINLOG_EVENTS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa3226f8ca913ab5c3e82b753da5b332eb", null ],
      [ "SQLCOM_DO", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac4c1b46a8771d4d5273e2d91fdd7793a", null ],
      [ "SQLCOM_SHOW_WARNS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa385f1fb99f4209fcf615623d2ad18cff", null ],
      [ "SQLCOM_EMPTY_QUERY", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad8080badb0cdff62d20e88253c428873", null ],
      [ "SQLCOM_SHOW_ERRORS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa6fd19375ceb3dfc2ebe90e3042b30499", null ],
      [ "SQLCOM_SHOW_STORAGE_ENGINES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad100ee173ba8503229267dee7f6ea73b", null ],
      [ "SQLCOM_SHOW_PRIVILEGES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa285906b5bdf26aa17095be9cd631b906", null ],
      [ "SQLCOM_HELP", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aab51d58c64e0d770ff43848272b98ef68", null ],
      [ "SQLCOM_CREATE_USER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac009c73c4d9fd47add950c6b085980c1", null ],
      [ "SQLCOM_DROP_USER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa8cc9ba5723a9c5bdb2883cfa5e3ef3ff", null ],
      [ "SQLCOM_RENAME_USER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac8d712be0207e7c545b23c8aea2e2823", null ],
      [ "SQLCOM_REVOKE_ALL", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aadbcaadd0a200305acf2a1cf4b775a099", null ],
      [ "SQLCOM_CHECKSUM", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aae576d889aa2accf4c0af5672a38f341e", null ],
      [ "SQLCOM_CREATE_PROCEDURE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa62269be0bba78bfd62da50d743a90b37", null ],
      [ "SQLCOM_CREATE_SPFUNCTION", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aab424cf4eb34a858cb95c2591f6b741af", null ],
      [ "SQLCOM_CALL", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa8a4a977386ef6ad3298726730a745e9f", null ],
      [ "SQLCOM_DROP_PROCEDURE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa75b53ef90af417bdaa9e5a6f588afbe5", null ],
      [ "SQLCOM_ALTER_PROCEDURE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaf9e13c0ec214755a4436d8a24e60a77f", null ],
      [ "SQLCOM_ALTER_FUNCTION", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa3d994983016427f434d62b6a5cf7f55", null ],
      [ "SQLCOM_SHOW_CREATE_PROC", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa9a1276d68e1ee8133533c84ad5937021", null ],
      [ "SQLCOM_SHOW_CREATE_FUNC", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa16ae1a0f26943e4e534ac398e77c4c87", null ],
      [ "SQLCOM_SHOW_STATUS_PROC", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa3894d9e0aff958868c22f775f63a0641", null ],
      [ "SQLCOM_SHOW_STATUS_FUNC", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa12c0aabee99928401452a06377e4d686", null ],
      [ "SQLCOM_PREPARE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa542dfbc1c5bf0c019a973a07c5957bdc", null ],
      [ "SQLCOM_EXECUTE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aab31203efdce461e5c939216de0f5d9ba", null ],
      [ "SQLCOM_DEALLOCATE_PREPARE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad8fd9c49186a88db2772cc318b79d12c", null ],
      [ "SQLCOM_CREATE_VIEW", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aafd4cf204aab9cd4fb6ee749afbaa467c", null ],
      [ "SQLCOM_DROP_VIEW", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad919a7f2e6cc3893f01c7b14ec7fc651", null ],
      [ "SQLCOM_CREATE_TRIGGER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa222b61db2efa6c6c27a55e4d8ab465e6", null ],
      [ "SQLCOM_DROP_TRIGGER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad0f5b2250b139dd68519cb452c77a56a", null ],
      [ "SQLCOM_XA_START", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaf3c96ad97182e486cf64a76a4d29106c", null ],
      [ "SQLCOM_XA_END", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad5201cba6167c47ae813c98c031225e3", null ],
      [ "SQLCOM_XA_PREPARE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa21aec6a5c787c2ef10540811fd34a8b9", null ],
      [ "SQLCOM_XA_COMMIT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa868d87a80643fc6ccaca2ba3dcd83ce9", null ],
      [ "SQLCOM_XA_ROLLBACK", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa9ab021e205fcafd9de7cfdf15c5254ac", null ],
      [ "SQLCOM_XA_RECOVER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac4c89c1c82951a7051e662ecda3e968f", null ],
      [ "SQLCOM_SHOW_PROC_CODE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaaad742cdcfb084e755033537e604fcc3", null ],
      [ "SQLCOM_SHOW_FUNC_CODE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaad6d938535f59546b13e33a97fd7bd07", null ],
      [ "SQLCOM_ALTER_TABLESPACE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa6d802430450acd2f6096416f93ec920b", null ],
      [ "SQLCOM_INSTALL_PLUGIN", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa64ced3072f0b8f19f0aa3a79a2087a60", null ],
      [ "SQLCOM_UNINSTALL_PLUGIN", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa8d04ebbf447e63de1359946cd000a234", null ],
      [ "SQLCOM_BINLOG_BASE64_EVENT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa0b38d2fa601a4b05ddc5e239f793b8db", null ],
      [ "SQLCOM_SHOW_PLUGINS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa3b7f1a4ac7e119c0c4005be8c2fa8926", null ],
      [ "SQLCOM_CREATE_SERVER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad6e6dc7a95cbbface0741dc015bfa311", null ],
      [ "SQLCOM_DROP_SERVER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa630a7493251d531d51461dd0e319ba67", null ],
      [ "SQLCOM_ALTER_SERVER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa592a037cc4ea0f4b76e013138e3f7a56", null ],
      [ "SQLCOM_CREATE_EVENT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa7ed64cd0770c62912434d1fc1e1ead6", null ],
      [ "SQLCOM_ALTER_EVENT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa563f3f7a3be783ab4eddb3b035fa4d28", null ],
      [ "SQLCOM_DROP_EVENT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa757b5f1a9b6e6df2741279e6f9ef775a", null ],
      [ "SQLCOM_SHOW_CREATE_EVENT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac5a2798e448ba1a8a96782205ac73ff2", null ],
      [ "SQLCOM_SHOW_EVENTS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa9710c27675fa7634709cb32c6c3c6b6c", null ],
      [ "SQLCOM_SHOW_CREATE_TRIGGER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa2365c69124373d2806d7253bdcd5800a", null ],
      [ "SQLCOM_SHOW_PROFILE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa4794b88947b85e7b532bd65124215e4e", null ],
      [ "SQLCOM_SHOW_PROFILES", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaf9fbe5fe31aa4d4880694032e79ebbc3", null ],
      [ "SQLCOM_SIGNAL", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aae49fb2c24d2e4b6d8367dcc6495c6e14", null ],
      [ "SQLCOM_RESIGNAL", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa41ce8db324134f7d70dc892b60b27492", null ],
      [ "SQLCOM_SHOW_RELAYLOG_EVENTS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aacdd352cb82f0657662c0e58e16d72018", null ],
      [ "SQLCOM_GET_DIAGNOSTICS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa93a90252fc16b3b95256f620e87265c2", null ],
      [ "SQLCOM_ALTER_USER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa272bcdb3ec15c8b75ed0ba8fa3aae253", null ],
      [ "SQLCOM_EXPLAIN_OTHER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa208a37d544e5e5ddebe9069bb6792e57", null ],
      [ "SQLCOM_SHOW_CREATE_USER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa85b01f2ff4f560e672ec4a8b1fe8d099", null ],
      [ "SQLCOM_SHUTDOWN", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa4d7516eabe205c4b8b6c439f283e359", null ],
      [ "SQLCOM_SET_PASSWORD", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aacaa81c476fc57270a7b0b65e913603ab", null ],
      [ "SQLCOM_ALTER_INSTANCE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa158144344a5f25f2fd92969f1a2a4389", null ],
      [ "SQLCOM_INSTALL_COMPONENT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa729c98985568b22406ac28c2b7e74d74", null ],
      [ "SQLCOM_UNINSTALL_COMPONENT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa935e07c9112dcec7333fa0486f3f2952", null ],
      [ "SQLCOM_CREATE_ROLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa9287ce45b94628267220523dd31e47d6", null ],
      [ "SQLCOM_DROP_ROLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaea2d94d94c8984eb7237e16dc798d1d2", null ],
      [ "SQLCOM_SET_ROLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aad1cd6204bc6789c13ab1ecc55c50d2da", null ],
      [ "SQLCOM_GRANT_ROLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaec2544ff4cddcc23c80be8cd7c1f3103", null ],
      [ "SQLCOM_REVOKE_ROLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa799666464614b4ea27b8375395ff8ae6", null ],
      [ "SQLCOM_ALTER_USER_DEFAULT_ROLE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaae3800d954116a72a65879044bb5ea95", null ],
      [ "SQLCOM_IMPORT", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa2d56838e324f0e643633bef56aea453", null ],
      [ "SQLCOM_CREATE_RESOURCE_GROUP", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aab7d4c2715e87244c5161c15f80368459", null ],
      [ "SQLCOM_ALTER_RESOURCE_GROUP", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa26cd2e41fdeb7f7a9fd9913690a4e812", null ],
      [ "SQLCOM_DROP_RESOURCE_GROUP", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa2b5468cabd514cb01fd8a6dc9819512b", null ],
      [ "SQLCOM_SET_RESOURCE_GROUP", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa3ef0c7d22e4495bc59123d33dc4cd077", null ],
      [ "SQLCOM_CLONE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aac72e43abf075041536d456ad3ba8e188", null ],
      [ "SQLCOM_LOCK_INSTANCE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa5e2acb56aff803bfcd8ac36f5fe322f6", null ],
      [ "SQLCOM_UNLOCK_INSTANCE", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aaa81fdf9157387fc5b0c729e91a714564", null ],
      [ "SQLCOM_RESTART_SERVER", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aafc7fcb7ef8f88a15365e802f91d809dc", null ],
      [ "SQLCOM_CREATE_SRS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa0ce21d91430d3aeedb57b5a039a1bdb4", null ],
      [ "SQLCOM_DROP_SRS", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa58328083ae30673316b36f4c1093457c", null ],
      [ "SQLCOM_END", "my__sqlcommand_8h.html#a46bba265a20f1784df6b9802aec4122aa80dbd5557446de815aaf1ee96602b232", null ]
    ] ]
];