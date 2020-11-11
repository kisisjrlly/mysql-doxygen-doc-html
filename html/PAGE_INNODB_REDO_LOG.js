var PAGE_INNODB_REDO_LOG =
[
    [ "General idea of redo log", "PAGE_INNODB_REDO_LOG.html#sect_redo_log_general", null ],
    [ "Architecture of redo log", "PAGE_INNODB_REDO_LOG.html#sect_redo_log_architecture", [
      [ "Data layers", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_data_layers", null ],
      [ "General rules", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_general_rules", null ]
    ] ],
    [ "Glossary of lsn values", "PAGE_INNODB_REDO_LOG.html#sect_redo_log_lsn_values", [
      [ "log.write_lsn", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_write_lsn", null ],
      [ "log.buf_ready_for_write_lsn", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_buf_ready_for_write_lsn", null ],
      [ "log.flushed_to_disk_lsn", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_flushed_to_disk_lsn", null ],
      [ "log.sn", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_sn", null ],
      [ "subsect_redo_log_buf_dirty_pages_added_up_to_lsn", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_buf_dirty_pages_added_up_to_lsn", null ],
      [ "subsect_redo_log_available_for_checkpoint_lsn", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_available_for_checkpoint_lsn", null ],
      [ "log.last_checkpoint_lsn", "PAGE_INNODB_REDO_LOG.html#subsect_redo_log_last_checkpoint_lsn", null ]
    ] ],
    [ "Redo log buffer", "PAGE_INNODB_REDO_LOG_BUF.html", [
      [ "Reservation of space in the redo", "PAGE_INNODB_REDO_LOG_BUF.html#sect_redo_log_buf_reserve", null ],
      [ "Copying data to the reserved space", "PAGE_INNODB_REDO_LOG_BUF.html#sect_redo_log_buf_write", null ],
      [ "Adding links to the", "PAGE_INNODB_REDO_LOG_BUF.html#sect_redo_log_buf_add_links_to_recent_written", null ],
      [ "Marking pages as dirty", "PAGE_INNODB_REDO_LOG_BUF.html#sect_redo_log_mark_dirty_pages", null ],
      [ "Adding dirty pages to flush lists", "PAGE_INNODB_REDO_LOG_BUF.html#sect_redo_log_add_dirty_pages", null ],
      [ "Adding link to the log recent", "PAGE_INNODB_REDO_LOG_BUF.html#sect_redo_log_add_link_to_recent_closed", null ],
      [ "Reclaiming space in redo log", "PAGE_INNODB_REDO_LOG_BUF.html#sect_redo_log_reclaim_space", null ]
    ] ],
    [ "Background redo log threads", "PAGE_INNODB_REDO_LOG_THREADS.html", [
      [ "Thread: log writer", "PAGE_INNODB_REDO_LOG_THREADS.html#sect_redo_log_writer", null ],
      [ "Thread: log flusher", "PAGE_INNODB_REDO_LOG_THREADS.html#sect_redo_log_flusher", null ],
      [ "Thread: log flush_notifier", "PAGE_INNODB_REDO_LOG_THREADS.html#sect_redo_log_flush_notifier", null ],
      [ "Thread: log write_notifier", "PAGE_INNODB_REDO_LOG_THREADS.html#sect_redo_log_write_notifier", null ],
      [ "Thread: log checkpointer", "PAGE_INNODB_REDO_LOG_THREADS.html#sect_redo_log_checkpointer", null ],
      [ "Waiting until log has been written to", "PAGE_INNODB_REDO_LOG_THREADS.html#sect_redo_log_waiting_for_writer", null ],
      [ "Waiting until log has been flushed", "PAGE_INNODB_REDO_LOG_THREADS.html#sect_redo_log_waiting_for_flusher", null ]
    ] ],
    [ "Format of redo log", "PAGE_INNODB_REDO_LOG_FORMAT.html", [
      [ "Overview", "PAGE_INNODB_REDO_LOG_FORMAT.html#sect_redo_log_format_overview", null ],
      [ "Log file format", "PAGE_INNODB_REDO_LOG_FORMAT.html#sect_redo_log_format_file", [
        [ "Header of log file", "PAGE_INNODB_REDO_LOG_FORMAT.html#subsect_redo_log_format_header", null ],
        [ "Log blocks", "PAGE_INNODB_REDO_LOG_FORMAT.html#subsect_redo_log_format_blocks", null ]
      ] ]
    ] ]
];