<template>
      <li class="row mt-4">
        <div class="col-1">
            <slot name="vote">
            <VotingComponent :upvoteCount="data?.upvotes" :downvoteCount="data?.downvotes"/>
            </slot>
        </div>
        <div class="col">
            <slot name="content"></slot>
        </div>
    </li>
</template>
<script src="./js/Q&AContainer.js"/>