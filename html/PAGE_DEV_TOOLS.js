var PAGE_DEV_TOOLS =
[
    [ "Lock Order", "PAGE_LOCK_ORDER.html", [
      [ "Introduction", "PAGE_LOCK_ORDER.html#LO_MAIN_INTRO", null ],
      [ "Building the code", "PAGE_LOCK_ORDER.html#LO_BUILDING", null ],
      [ "Running MySQL test with LOCK ORDER", "PAGE_LOCK_ORDER.html#LO_RUNNING", null ],
      [ "Lock order file formats", "PAGE_LOCK_ORDER.html#LO_FILE_FORMATS", [
        [ "lock_order_dependencies file", "PAGE_LOCK_ORDER.html#LO_DEPENDENCIES", [
          [ "Mutex nodes", "PAGE_LOCK_ORDER.html#LO_DEP_MUTEX", null ],
          [ "Rwlock nodes", "PAGE_LOCK_ORDER.html#LO_DEP_RWLOCK", null ],
          [ "Cond nodes", "PAGE_LOCK_ORDER.html#LO_DEP_COND", null ],
          [ "File nodes", "PAGE_LOCK_ORDER.html#LO_DEP_FILE", null ]
        ] ],
        [ "lock_order.log file", "PAGE_LOCK_ORDER.html#LO_LOG", null ],
        [ "lock_order.txt file", "PAGE_LOCK_ORDER.html#LO_GRAPH_TEXT", null ]
      ] ],
      [ "Methodology", "PAGE_LOCK_ORDER.html#LO_METHODOLOGY", [
        [ "Collect missing arcs", "PAGE_LOCK_ORDER.html#LO_PROCESS_COLLECT", null ],
        [ "Perform graph analysis", "PAGE_LOCK_ORDER.html#LO_PROCESS_ANALYSIS", null ],
        [ "Break Strongly Connected Components", "PAGE_LOCK_ORDER.html#LO_PROCESS_BREAK", null ],
        [ "Get reported bugs fixed", "PAGE_LOCK_ORDER.html#LO_PROCESS_FIX", null ]
      ] ],
      [ "Advanced tooling", "PAGE_LOCK_ORDER.html#LO_TOOLS", [
        [ "Tracing dependencies", "PAGE_LOCK_ORDER.html#LO_TOOL_TRACE", null ],
        [ "Debugging dependencies", "PAGE_LOCK_ORDER.html#LO_TOOL_DEBUG", null ],
        [ "Simulating loops", "PAGE_LOCK_ORDER.html#LO_TOOL_LOOP", null ],
        [ "Simulating ignored nodes", "PAGE_LOCK_ORDER.html#LO_TOOL_IGNORED", null ]
      ] ],
      [ "Understanding the notation", "PAGE_LOCK_ORDER.html#LO_NOTATION", [
        [ "Basic mutex loop", "PAGE_LOCK_ORDER.html#LO_TUT_1", [
          [ "Sample code", "PAGE_LOCK_ORDER.html#LO_TUT_1_CODE", null ],
          [ "Dependency graph", "PAGE_LOCK_ORDER.html#LO_TUT_1_GRAPH", null ],
          [ "Lock order report", "PAGE_LOCK_ORDER.html#LO_TUT_1_REPORT", null ]
        ] ],
        [ "With read write lock", "PAGE_LOCK_ORDER.html#LO_TUT_2", [
          [ "Sample code", "PAGE_LOCK_ORDER.html#LO_TUT_2_CODE", null ],
          [ "Dependency graph", "PAGE_LOCK_ORDER.html#LO_TUT_2_GRAPH", null ],
          [ "Lock order report", "PAGE_LOCK_ORDER.html#LO_TUT_2_REPORT", null ]
        ] ],
        [ "With shared exclusive locks", "PAGE_LOCK_ORDER.html#LO_TUT_3", [
          [ "Sample code", "PAGE_LOCK_ORDER.html#LO_TUT_3_CODE", null ],
          [ "Dependency graph", "PAGE_LOCK_ORDER.html#LO_TUT_3_GRAPH", null ],
          [ "Lock order report", "PAGE_LOCK_ORDER.html#LO_TUT_3_REPORT", null ]
        ] ]
      ] ]
    ] ]
];