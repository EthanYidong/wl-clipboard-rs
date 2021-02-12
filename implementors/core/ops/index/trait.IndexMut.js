(function() {var implementors = {};
implementors["indexmap"] = [{"text":"impl&lt;K, V, Q:&nbsp;?Sized, S&gt; IndexMut&lt;&amp;'_ Q&gt; for IndexMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Q: Hash + Equivalent&lt;K&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V, S&gt; IndexMut&lt;usize&gt; for IndexMap&lt;K, V, S&gt;","synthetic":false,"types":[]}];
implementors["petgraph"] = [{"text":"impl&lt;N, E, Ty, Ix&gt; IndexMut&lt;Ix&gt; for Csr&lt;N, E, Ty, Ix&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ty: EdgeType,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ix: IndexType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, E, Ty, Ix&gt; IndexMut&lt;NodeIndex&lt;Ix&gt;&gt; for Graph&lt;N, E, Ty, Ix&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ty: EdgeType,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ix: IndexType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, E, Ty, Ix&gt; IndexMut&lt;EdgeIndex&lt;Ix&gt;&gt; for Graph&lt;N, E, Ty, Ix&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ty: EdgeType,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ix: IndexType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, G, I&gt; IndexMut&lt;I&gt; for Frozen&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: IndexMut&lt;I&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, E, Ty, Ix&gt; IndexMut&lt;NodeIndex&lt;Ix&gt;&gt; for StableGraph&lt;N, E, Ty, Ix&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ty: EdgeType,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ix: IndexType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, E, Ty, Ix&gt; IndexMut&lt;EdgeIndex&lt;Ix&gt;&gt; for StableGraph&lt;N, E, Ty, Ix&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ty: EdgeType,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ix: IndexType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, E, Ty&gt; IndexMut&lt;(N, N)&gt; for GraphMap&lt;N, E, Ty&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: NodeTrait,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ty: EdgeType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, E, Ty:&nbsp;EdgeType, Null:&nbsp;Nullable&lt;Wrapped = E&gt;, Ix:&nbsp;IndexType&gt; IndexMut&lt;NodeIndex&lt;Ix&gt;&gt; for MatrixGraph&lt;N, E, Ty, Null, Ix&gt;","synthetic":false,"types":[]},{"text":"impl&lt;N, E, Ty:&nbsp;EdgeType, Null:&nbsp;Nullable&lt;Wrapped = E&gt;, Ix:&nbsp;IndexType&gt; IndexMut&lt;(NodeIndex&lt;Ix&gt;, NodeIndex&lt;Ix&gt;)&gt; for MatrixGraph&lt;N, E, Ty, Null, Ix&gt;","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array, I:&nbsp;SliceIndex&lt;[A::Item]&gt;&gt; IndexMut&lt;I&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; IndexMut&lt;usize&gt; for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]}];
implementors["vec_map"] = [{"text":"impl&lt;V&gt; IndexMut&lt;usize&gt; for VecMap&lt;V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, V&gt; IndexMut&lt;&amp;'a usize&gt; for VecMap&lt;V&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()