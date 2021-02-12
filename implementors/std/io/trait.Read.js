(function() {var implementors = {};
implementors["nix"] = [{"text":"impl Read for PtyMaster","synthetic":false,"types":[]}];
implementors["os_pipe"] = [{"text":"impl Read for PipeReader","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Read for &amp;'a PipeReader","synthetic":false,"types":[]}];
implementors["rand_core"] = [{"text":"impl Read for dyn RngCore","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl Read for NamedTempFile","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Read for &amp;'a NamedTempFile","synthetic":false,"types":[]},{"text":"impl Read for SpooledTempFile","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()