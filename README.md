<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome file</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
      <p>#maerchen-app</p>
<p>This is my first Node.js project, which crawls german tales from <a href="https://www.maerchen.com">https://www.maerchen.com</a> and providing them with express in RESTful API manner.</p>
<p>Its a simple app for searching and reading tales</p>
<hr>
<p>##Installation</p>
<p>My Project uses ES6 code style so you need to <code>node -r esm ./server.js</code></p>
<p>I scripted nodemon with<code>npm start</code></p>
<hr>
<p>##Architecture</p>
<p>Modules:</p>
<p><img src="https://github.com/isk030/maerchen-app/raw/master/m%C3%A4rchen-app-arch.png" alt="Architecture"></p>
<p>Application Flow:</p>
<div class="mermaid"><svg xmlns="http://www.w3.org/2000/svg" id="mermaid-svg-NzDkkb2EhiYObUl5" width="100%" style="max-width: 260.3804702758789px;" viewBox="0 0 260.3804702758789 612.0890655517578"><g transform="translate(-12, -12)"><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath" style="opacity: 1;"><path class="path" d="M113.0445327758789,66L113.0445327758789,91L113.0445327758789,116" marker-end="url(#arrowhead3255)" style="fill:none"></path><defs><marker id="arrowhead3255" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M113.0445327758789,162L113.0445327758789,187L113.54453277587892,212.50000152587893" marker-end="url(#arrowhead3256)" style="fill:none"></path><defs><marker id="arrowhead3256" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M82.36458132974369,367.4091125797437L46.997657775878906,436.0890655517578L46.997657775878906,497.0890655517578L46.997657775878906,545.0890655517578L81.3970718383789,570.0890655517578" marker-end="url(#arrowhead3257)" style="fill:none"></path><defs><marker id="arrowhead3257" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M144.7244831993462,367.4091105506539L179.0914077758789,436.0890655517578L179.0914077758789,474.0890655517578" marker-end="url(#arrowhead3258)" style="fill:none"></path><defs><marker id="arrowhead3258" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M179.0914077758789,520.0890655517578L179.0914077758789,545.0890655517578L144.6919937133789,570.0890655517578" marker-end="url(#arrowhead3259)" style="fill:none"></path><defs><marker id="arrowhead3259" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(46.997657775878906,497.0890655517578)" style="opacity: 1;"><g transform="translate(-11.8046875,-13)" class="label"><foreignObject width="23.609375" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Yes</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(179.0914077758789,436.0890655517578)" style="opacity: 1;"><g transform="translate(-10.5234375,-13)" class="label"><foreignObject width="21.046875" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">No</span></div></foreignObject></g></g><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node" id="A" transform="translate(113.0445327758789,43)" style="opacity: 1;"><rect rx="0" ry="0" x="-87.328125" y="-23" width="174.65625" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-77.328125,-13)"><foreignObject width="154.65625" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Host Server and listen</div></foreignObject></g></g></g><g class="node" id="B" transform="translate(113.0445327758789,139)" style="opacity: 1;"><rect rx="0" ry="0" x="-62.3828125" y="-23" width="124.765625" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-52.3828125,-13)"><foreignObject width="104.765625" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Connect to DB</div></foreignObject></g></g></g><g class="node" id="C" transform="translate(113.0445327758789,305.0445327758789)" style="opacity: 1;"><polygon points="93.04453125,0 186.0890625,-93.04453125 93.04453125,-186.0890625 0,-93.04453125" rx="5" ry="5" transform="translate(-93.04453125,93.04453125)"></polygon><g class="label" transform="translate(0,0)"><g transform="translate(-70.3828125,-13)"><foreignObject width="140.765625" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Enough tales in DB?</div></foreignObject></g></g></g><g class="node" id="D" transform="translate(113.0445327758789,593.0890655517578)" style="opacity: 1;"><rect rx="0" ry="0" x="-67.28125" y="-23" width="134.5625" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-57.28125,-13)"><foreignObject width="114.5625" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Wait for request</div></foreignObject></g></g></g><g class="node" id="E" transform="translate(179.0914077758789,497.0890655517578)" style="opacity: 1;"><rect rx="0" ry="0" x="-85.2890625" y="-23" width="170.578125" height="46"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-75.2890625,-13)"><foreignObject width="150.578125" height="26"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Crawl remaining tales</div></foreignObject></g></g></g></g></g></g></svg></div>
<p>Communication Flow:</p>
<div class="mermaid"><svg xmlns="http://www.w3.org/2000/svg" id="mermaid-svg-5smcX35FmujVWdGm" height="100%" width="100%" style="max-width:550px;" viewBox="-150 -10 550 687"><g></g><g><line id="actor365" x1="75" y1="5" x2="75" y2="676" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="0" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="75" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="75" dy="0">Client</tspan></text></g><g><line id="actor366" x1="275" y1="5" x2="275" y2="676" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="200" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="275" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="275" dy="0">Server</tspan></text></g><defs><marker id="arrowhead" refX="5" refY="2" markerWidth="6" markerHeight="4" orient="auto"><path d="M 0,0 V 4 L6,2 Z"></path></marker></defs><defs><marker id="crosshead" markerWidth="15" markerHeight="8" orient="auto" refX="16" refY="4"><path fill="black" stroke="#000000" stroke-width="1px" d="M 9,2 V 6 L16,4 Z" style="stroke-dasharray: 0, 0;"></path><path fill="none" stroke="#000000" stroke-width="1px" d="M 0,1 L 6,7 M 6,1 L 0,7" style="stroke-dasharray: 0, 0;"></path></marker></defs><g><rect x="-100" y="75" fill="#EDF2AE" stroke="#666" width="150" height="34" rx="0" ry="0" class="note"></rect><text x="-104" y="99" fill="black" class="noteText"><tspan x="-84" fill="black">Initial Load</tspan></text></g><g><text x="175" y="137" class="messageText" style="text-anchor: middle;">Requesting Html, Js and all tales</text><line x1="75" y1="144" x2="275" y2="144" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><text x="175" y="172" class="messageText" style="text-anchor: middle;">Providing Html, Js and all tales</text><line x1="275" y1="179" x2="75" y2="179" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><rect x="-100" y="189" fill="#EDF2AE" stroke="#666" width="150" height="34" rx="0" ry="0" class="note"></rect><text x="-104" y="213" fill="black" class="noteText"><tspan x="-84" fill="black">User Signup</tspan></text></g><g><text x="175" y="251" class="messageText" style="text-anchor: middle;">Sending Credentials</text><line x1="75" y1="258" x2="275" y2="258" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><text x="175" y="286" class="messageText" style="text-anchor: middle;">Status response</text><line x1="275" y1="293" x2="75" y2="293" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><rect x="-100" y="303" fill="#EDF2AE" stroke="#666" width="150" height="34" rx="0" ry="0" class="note"></rect><text x="-104" y="327" fill="black" class="noteText"><tspan x="-84" fill="black">Login User</tspan></text></g><g><text x="175" y="365" class="messageText" style="text-anchor: middle;">Credentials sent</text><line x1="75" y1="372" x2="275" y2="372" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><text x="175" y="400" class="messageText" style="text-anchor: middle;">Validation and Delivering token</text><line x1="275" y1="407" x2="75" y2="407" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><text x="175" y="435" class="messageText" style="text-anchor: middle;">Request favourite tales with token</text><line x1="75" y1="442" x2="275" y2="442" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><text x="175" y="470" class="messageText" style="text-anchor: middle;">Favourite Tales sent</text><line x1="275" y1="477" x2="75" y2="477" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><rect x="-100" y="487" fill="#EDF2AE" stroke="#666" width="150" height="34" rx="0" ry="0" class="note"></rect><text x="-104" y="511" fill="black" class="noteText"><tspan x="-84" fill="black">Update Favourites</tspan></text></g><g><text x="175" y="549" class="messageText" style="text-anchor: middle;">Favourite tales list sent with token</text><line x1="75" y1="556" x2="275" y2="556" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><text x="175" y="584" class="messageText" style="text-anchor: middle;">Status response</text><line x1="275" y1="591" x2="75" y2="591" class="messageLine0" stroke-width="2" stroke="black" style="fill: none;"></line></g><g><rect x="0" y="611" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="75" y="643.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="75" dy="0">Client</tspan></text></g><g><rect x="200" y="611" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="275" y="643.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="275" dy="0">Server</tspan></text></g></svg></div>
<hr>
<p>Avaiable Endpoints</p>
<hr>
<p><code>GET: /tale</code></p>
<p>Delivers all Tales</p>
<p>Response:</p>
<pre class=" language-json"><code class="prism  language-json">
<span class="token punctuation">{</span>

<span class="token string">"count"</span><span class="token punctuation">:</span> <span class="token number">373</span><span class="token punctuation">,</span>

<span class="token string">"tales"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>

<span class="token punctuation">{</span>

<span class="token string">"_id"</span><span class="token punctuation">:</span> <span class="token string">"5edb8b41e60f490bf0c644e7"</span><span class="token punctuation">,</span>

<span class="token string">"title"</span><span class="token punctuation">:</span> <span class="token string">"Der Froschkönig oder der eiserne Heinrich"</span><span class="token punctuation">,</span>

<span class="token string">"author"</span><span class="token punctuation">:</span> "Jacob <span class="token function">Grimm</span> <span class="token punctuation">(</span><span class="token number">1785</span><span class="token operator">-</span><span class="token number">1863</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token string">"content"</span><span class="token punctuation">:</span> "In  den  alten  Zeiten<span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token string">"url"</span><span class="token punctuation">:</span> <span class="token string">"https://maerchen.com/grimm/der-froschkoenig.php"</span>

<span class="token punctuation">}</span>

<span class="token punctuation">]</span>

<span class="token punctuation">}</span>

</code></pre>
<hr>
<p><code>POST: /user/signup</code></p>
<p>Signing up new User</p>
<p>Request:</p>
<pre class=" language-json"><code class="prism  language-json">
<span class="token punctuation">{</span>

<span class="token string">"email"</span><span class="token punctuation">:</span> <span class="token string">"example@gmail.com"</span><span class="token punctuation">,</span>

<span class="token string">"password"</span><span class="token punctuation">:</span> <span class="token string">"password"</span>

<span class="token punctuation">}</span>

</code></pre>
<p>Response:</p>
<pre class=" language-json"><code class="prism  language-json">
<span class="token punctuation">{</span>

<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"User created"</span>

<span class="token punctuation">}</span>

</code></pre>
<hr>
<p><code>POST: /user/login</code></p>
<p>Login in an user</p>
<p>Request:</p>
<pre class=" language-json"><code class="prism  language-json">
<span class="token punctuation">{</span>

<span class="token string">"email"</span><span class="token punctuation">:</span> <span class="token string">"example@gmail.com"</span><span class="token punctuation">,</span>

<span class="token string">"password"</span><span class="token punctuation">:</span> <span class="token string">"password"</span>

<span class="token punctuation">}</span>

</code></pre>
<p>Response:</p>
<pre class=" language-json"><code class="prism  language-json">
<span class="token punctuation">{</span>

<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"Auth successful"</span><span class="token punctuation">,</span>

<span class="token string">"token"</span><span class="token punctuation">:</span> <span class="token string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlzazAzMEBnbWFpbC5jb20iLCJ1c2VySWQiOiI1ZWU5ZjVhMGM5ZGFhMjBmYTg1MjdiNGEiLCJpYXQiOjE1OTMwMDY1MjksImV4cCI6MTU5MzAxMDEyOX0.FQ28okybq35_YNWRZmiYI4eP8YOCgX1P29J1Z8FAAys"</span><span class="token punctuation">,</span>

<span class="token string">"_id"</span><span class="token punctuation">:</span> <span class="token string">"5ee9f5a0c9daa20fa8527b4a"</span><span class="token punctuation">,</span>

<span class="token string">"favs"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>

<span class="token string">"5edb8b41e60f490bf0c644e7"</span>

<span class="token punctuation">]</span>

<span class="token punctuation">}</span>

</code></pre>
<p><code>PATCH: /user/&lt;userId&gt;</code></p>
<p>Login in an user</p>
<p>Request with Authorization Header carrying login token</p>
<pre class=" language-json"><code class="prism  language-json">
<span class="token punctuation">{</span>

<span class="token string">"favs"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>

<span class="token string">"&lt;taleId&gt;"</span><span class="token punctuation">,</span>

<span class="token string">"&lt;taleId&gt;"</span>

<span class="token punctuation">]</span>

<span class="token punctuation">}</span>

</code></pre>
<p>Response:</p>
<pre class=" language-json"><code class="prism  language-json">
<span class="token punctuation">{</span>

<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"favs updated"</span>

<span class="token punctuation">}</span>

</code></pre>

    </div>
  </div>
</body>

</html>
