<template>
<div>
    <!-- {{data}} -->
    <div class="container bg-light"  style="min-height:8rem" v-html="data?.anscontent">
    </div>

    <div class="row justify-content-end">
     <span class="text-secondary">Updated <timeago :datetime="data?.updatedatetime"></timeago></span>
     <span class="ml-2 mr-2">|</span>
     <span class="text-secondary"> Created at <timeago :datetime="data?.createdatetime"></timeago></span>
    </div>
</div>
</template>

<script src="./js/answer.js"/>