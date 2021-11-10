---
layout: page
title: STUDY
permalink: /study/
---

<!-- STUDY 영역  -->
<ol class="related-posts">
{% for post in site.posts %}
    {% if post.category contains "study" %}
    {% include components/post-list-item.html post=post %}
    {% endif %}
{% endfor %}
</ol>