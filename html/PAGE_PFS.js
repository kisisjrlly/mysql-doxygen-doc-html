var PAGE_PFS =
[
    [ "Introduction", "PAGE_PFS.html#PFS_MAIN_INTRO", null ],
    [ "Multiple interfaces", "PAGE_PFS.html#INTERFACES", [
      [ "Instrumenting interface", "PAGE_PFS.html#INT_INSTRUMENTING", null ],
      [ "Compiling interface", "PAGE_PFS.html#INT_COMPILING", null ],
      [ "Server startup interface", "PAGE_PFS.html#INT_STARTUP", null ],
      [ "Server bootstrap interface", "PAGE_PFS.html#INT_BOOTSTRAP", null ],
      [ "Runtime configuration interface", "PAGE_PFS.html#INT_CONFIG", null ],
      [ "Internal audit interface", "PAGE_PFS.html#INT_STATUS", null ],
      [ "Query interface", "PAGE_PFS.html#INT_QUERY", null ]
    ] ],
    [ "Design principles", "PAGE_PFS.html#DESIGN_PRINCIPLES", [
      [ "No behavior changes", "PAGE_PFS.html#PRINCIPLE_BEHAVIOR", null ],
      [ "No performance hit", "PAGE_PFS.html#PRINCIPLE_PERFORMANCE", null ],
      [ "Unintrusive instrumentation", "PAGE_PFS.html#PRINCIPLE_NOT_INTRUSIVE", null ],
      [ "Extendable instrumentation", "PAGE_PFS.html#PRINCIPLE_EXTENDABLE", null ],
      [ "Versioned instrumentation", "PAGE_PFS.html#PRINCIPLE_VERSIONED", null ],
      [ "Easy deployment", "PAGE_PFS.html#PRINCIPLE_DEPLOYMENT", null ]
    ] ],
    [ "Instrumentation interface", "PAGE_PFS_PSI.html", [
      [ "Introduction", "PAGE_PFS_PSI.html#PFS_PSI_INTRO", null ],
      [ "Non instrumented code", "PAGE_PFS_PSI.html#PFS_PSI_NONE", null ],
      [ "Instrumentation for server code", "PAGE_PFS_PSI.html#PFS_PSI_SERVER", null ],
      [ "Instrumentation for a plugin", "PAGE_PFS_PSI.html#PFS_PSI_PLUGIN", null ],
      [ "Instrumentation for component", "PAGE_PFS_PSI.html#PFS_PSI_COMPONENT", null ],
      [ "List of available instrumentation", "PAGE_PFS_PSI.html#PFS_PSI_LIST", null ]
    ] ],
    [ "Aggregates", "PAGE_PFS_AGGREGATES.html", [
      [ "Introduction", "PAGE_PFS_AGGREGATES.html#PFS_AGG_INTRO", null ],
      [ "Concept of dimension", "PAGE_PFS_AGGREGATES.html#DIMENSION", null ],
      [ "Concept of projection", "PAGE_PFS_AGGREGATES.html#PROJECTION", null ],
      [ "Concept of composition", "PAGE_PFS_AGGREGATES.html#COMPOSITION", null ],
      [ "Object graph", "PAGE_PFS_AGGREGATES.html#OBJECT_GRAPH", null ],
      [ "On the fly aggregates", "PAGE_PFS_AGGREGATES.html#ON_THE_FLY", null ],
      [ "Higher level aggregates", "PAGE_PFS_AGGREGATES.html#HIGHER_LEVEL", null ],
      [ "Mixed level aggregates", "PAGE_PFS_AGGREGATES.html#MIXED", null ],
      [ "Implementation for waits aggregates", "PAGE_PFS_AGGREGATES.html#IMPL_WAIT", [
        [ "Mutex waits", "PAGE_PFS_AGGREGATES.html#IMPL_WAIT_MUTEX", null ],
        [ "Rwlock waits", "PAGE_PFS_AGGREGATES.html#IMPL_WAIT_RWLOCK", null ],
        [ "Cond waits", "PAGE_PFS_AGGREGATES.html#IMPL_WAIT_COND", null ],
        [ "File waits", "PAGE_PFS_AGGREGATES.html#IMPL_WAIT_FILE", null ],
        [ "Socket waits", "PAGE_PFS_AGGREGATES.html#IMPL_WAIT_SOCKET", null ],
        [ "Table waits", "PAGE_PFS_AGGREGATES.html#IMPL_WAIT_TABLE", null ]
      ] ],
      [ "Implementation for stages aggregates", "PAGE_PFS_AGGREGATES.html#IMPL_STAGE", null ],
      [ "Implementation for statements consumers", "PAGE_PFS_AGGREGATES.html#IMPL_STATEMENT", null ],
      [ "Implementation for transactions consumers", "PAGE_PFS_AGGREGATES.html#IMPL_TRANSACTION", null ],
      [ "Implementation for memory instruments", "PAGE_PFS_AGGREGATES.html#IMPL_MEMORY", null ],
      [ "Implementation for error instruments", "PAGE_PFS_AGGREGATES.html#IMPL_ERROR", null ]
    ] ],
    [ "Performance schema data locks", "PAGE_PFS_DATA_LOCKS.html", [
      [ "Server / Storage engine interface", "PAGE_PFS_DATA_LOCKS.html#SERVER_ENGINE_INTERFACE", [
        [ "Registration", "PAGE_PFS_DATA_LOCKS.html#SE_INTERFACE_REGISTRATION", null ],
        [ "Iteration for each storage engine", "PAGE_PFS_DATA_LOCKS.html#SE_INTERFACE_SCAN_1", null ],
        [ "Iteration inside a storage engine", "PAGE_PFS_DATA_LOCKS.html#SE_INTERFACE_SCAN_2", null ]
      ] ]
    ] ],
    [ "Implementing a new performance_schema table", "PAGE_PFS_NEW_TABLE.html", [
      [ "Storage engine interface", "PAGE_PFS_NEW_TABLE.html#NEW_TABLE_INTERFACE", null ],
      [ "Application query", "PAGE_PFS_NEW_TABLE.html#NEW_TABLE_APPLICATION", null ],
      [ "Table exposing static data", "PAGE_PFS_NEW_TABLE.html#NEW_TABLE_STATIC", null ],
      [ "Table exposing collected data", "PAGE_PFS_NEW_TABLE.html#NEW_TABLE_COLLECTED", null ],
      [ "Table exposing server internal data", "PAGE_PFS_NEW_TABLE.html#NEW_TABLE_INTERNAL", null ]
    ] ],
    [ "Notification service", "PAGE_PFS_NOTIFICATION_SERVICE.html", [
      [ "Introduction", "PAGE_PFS_NOTIFICATION_SERVICE.html#PFS_NOTIFICATION_INTRO", null ],
      [ "Callback Function Definition", "PAGE_PFS_NOTIFICATION_SERVICE.html#PFS_NOTIFICATION_CALLBACKS", null ],
      [ "Registering Events", "PAGE_PFS_NOTIFICATION_SERVICE.html#PFS_NOTIFICATION_REGISTER", null ],
      [ "Unregistering Events", "PAGE_PFS_NOTIFICATION_SERVICE.html#PFS_NOTIFICATION_UNREGISTER", null ]
    ] ],
    [ "Resource group service", "PAGE_PFS_RESOURCE_GROUP_SERVICE.html", [
      [ "Introduction", "PAGE_PFS_RESOURCE_GROUP_SERVICE.html#PFS_RESOURCE_GROUP_INTRO", null ],
      [ "Setting a group name", "PAGE_PFS_RESOURCE_GROUP_SERVICE.html#PFS_RESOURCE_GROUP_SET", null ],
      [ "Getting thread attributes", "PAGE_PFS_RESOURCE_GROUP_SERVICE.html#PFS_RESOURCE_GROUP_GET", null ]
    ] ],
    [ "Plugin table service", "PAGE_PFS_TABLE_PLUGIN_SERVICE.html", "PAGE_PFS_TABLE_PLUGIN_SERVICE" ],
    [ "Performance schema TLS channels instrumentation", "PAGE_PFS_TLS_CHANNEL.html", [
      [ "Registration", "PAGE_PFS_TLS_CHANNEL.html#TLS_CHANNEL_REGISTRATION", null ],
      [ "Iteration for each TLS channel", "PAGE_PFS_TLS_CHANNEL.html#TLS_CHANNEL_SCAN", null ],
      [ "Inside a registered TLS channel", "PAGE_PFS_TLS_CHANNEL.html#TLS_CHANNEL_INTERNAL_SCAN", null ]
    ] ]
];