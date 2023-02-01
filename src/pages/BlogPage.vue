
<template>
<div> 
    <div class="row">
        <div class="col-1">
            <VotingComponent/>
        </div>
        <div class="col">
             <h2>{{getSelectedBlog?.title}}</h2>
            <p>{{getSelectedBlog?.description+'Though it helps many people, this medication may sometimes cause addiction. This risk may be higher if you have a substance use disorder (such as overuse of or addiction to drugs/alcohol). Take this medication exactly as prescribed to lower the risk of addiction. Ask your doctor or pharmacist for more details.Do not suddenly stop using this drug without consulting your doctor. Some conditions may become worse when this drug is abruptly stopped. Your dose may need to be gradually decreased.When this medication is used for a long time, it may not work as well. Talk with your doctor if this medication stops working well.Tell your doctor if your condition persists or worsens.'}}</p>
           
        </div>
    </div>
     <TextEditor @content="fetchContent"/>
  
</div>
</template>
<script src="./js/blog.js"/>