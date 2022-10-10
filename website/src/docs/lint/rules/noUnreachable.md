---
title: Lint Rule noUnreachable
layout: layouts/rule.liquid
---

# noUnreachable (since v0.7.0)

Disallow unreachable code

## Examples

### Invalid

```jsx
function example() {
    return;
    neverCalled();
}
```

{% raw %}<pre class="language-text"><code class="language-text">nursery/noUnreachable.js:3:5 <a href="https://rome.tools/docs/lint/rules/noUnreachable">lint/nursery/noUnreachable</a> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<strong><span style="color: Orange;">  </span></strong><strong><span style="color: Orange;">⚠</span></strong> <span style="color: Orange;">This code will never be reached ...</span>
  
    <strong>1 │ </strong>function example() {
    <strong>2 │ </strong>    return;
<strong><span style="color: Tomato;">  </span></strong><strong><span style="color: Tomato;">&gt;</span></strong> <strong>3 │ </strong>    neverCalled();
   <strong>   │ </strong>    <strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong>
    <strong>4 │ </strong>}
    <strong>5 │ </strong>
  
<strong><span style="color: rgb(38, 148, 255);">  </span></strong><strong><span style="color: rgb(38, 148, 255);">ℹ</span></strong> <span style="color: rgb(38, 148, 255);">... because this statement will return from the function beforehand</span>
  
    <strong>1 │ </strong>function example() {
<strong><span style="color: Tomato;">  </span></strong><strong><span style="color: Tomato;">&gt;</span></strong> <strong>2 │ </strong>    return;
   <strong>   │ </strong>    <strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong>
    <strong>3 │ </strong>    neverCalled();
    <strong>4 │ </strong>}
  
</code></pre>{% endraw %}

```jsx
function example() {
    for(let i = 0; i < 10; ++i) {
        break;
    }
}
```

{% raw %}<pre class="language-text"><code class="language-text">nursery/noUnreachable.js:2:28 <a href="https://rome.tools/docs/lint/rules/noUnreachable">lint/nursery/noUnreachable</a> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<strong><span style="color: Orange;">  </span></strong><strong><span style="color: Orange;">⚠</span></strong> <span style="color: Orange;">This code will never be reached ...</span>
  
    <strong>1 │ </strong>function example() {
<strong><span style="color: Tomato;">  </span></strong><strong><span style="color: Tomato;">&gt;</span></strong> <strong>2 │ </strong>    for(let i = 0; i &lt; 10; ++i) {
   <strong>   │ </strong>                           <strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong>
    <strong>3 │ </strong>        break;
    <strong>4 │ </strong>    }
  
<strong><span style="color: rgb(38, 148, 255);">  </span></strong><strong><span style="color: rgb(38, 148, 255);">ℹ</span></strong> <span style="color: rgb(38, 148, 255);">... because this statement will break the flow of the code beforehand</span>
  
    <strong>1 │ </strong>function example() {
    <strong>2 │ </strong>    for(let i = 0; i &lt; 10; ++i) {
<strong><span style="color: Tomato;">  </span></strong><strong><span style="color: Tomato;">&gt;</span></strong> <strong>3 │ </strong>        break;
   <strong>   │ </strong>        <strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong>
    <strong>4 │ </strong>    }
    <strong>5 │ </strong>}
  
</code></pre>{% endraw %}

```jsx
function example() {
    for(const key in value) {
        continue;
        neverCalled();
    }
}
```

{% raw %}<pre class="language-text"><code class="language-text">nursery/noUnreachable.js:4:9 <a href="https://rome.tools/docs/lint/rules/noUnreachable">lint/nursery/noUnreachable</a> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<strong><span style="color: Orange;">  </span></strong><strong><span style="color: Orange;">⚠</span></strong> <span style="color: Orange;">This code will never be reached ...</span>
  
    <strong>2 │ </strong>    for(const key in value) {
    <strong>3 │ </strong>        continue;
<strong><span style="color: Tomato;">  </span></strong><strong><span style="color: Tomato;">&gt;</span></strong> <strong>4 │ </strong>        neverCalled();
   <strong>   │ </strong>        <strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong>
    <strong>5 │ </strong>    }
    <strong>6 │ </strong>}
  
<strong><span style="color: rgb(38, 148, 255);">  </span></strong><strong><span style="color: rgb(38, 148, 255);">ℹ</span></strong> <span style="color: rgb(38, 148, 255);">... because this statement will continue the loop beforehand</span>
  
    <strong>1 │ </strong>function example() {
    <strong>2 │ </strong>    for(const key in value) {
<strong><span style="color: Tomato;">  </span></strong><strong><span style="color: Tomato;">&gt;</span></strong> <strong>3 │ </strong>        continue;
   <strong>   │ </strong>        <strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong><strong><span style="color: Tomato;">^</span></strong>
    <strong>4 │ </strong>        neverCalled();
    <strong>5 │ </strong>    }
  
</code></pre>{% endraw %}
