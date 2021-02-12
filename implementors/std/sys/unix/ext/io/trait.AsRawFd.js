(function() {var implementors = {};
implementors["nix"] = [{"text":"impl AsRawFd for Dir","synthetic":false,"types":[]},{"text":"impl AsRawFd for PtyMaster","synthetic":false,"types":[]},{"text":"impl AsRawFd for SignalFd","synthetic":false,"types":[]},{"text":"impl AsRawFd for Inotify","synthetic":false,"types":[]},{"text":"impl AsRawFd for TimerFd","synthetic":false,"types":[]}];
implementors["os_pipe"] = [{"text":"impl AsRawFd for PipeReader","synthetic":false,"types":[]},{"text":"impl AsRawFd for PipeWriter","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl AsRawFd for NamedTempFile","synthetic":false,"types":[]}];
implementors["wayland_commons"] = [{"text":"impl AsRawFd for Socket","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()