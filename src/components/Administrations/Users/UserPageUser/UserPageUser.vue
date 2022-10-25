<template>
   
   <div class="user-title"></div>
    <div class="user-avatar">
        <img src="/images/team-7.jpg" alt="">
    </div>
    <div class="user-info">
        <div class="user-name title-h4">Anna Nelson</div>
    </div>
    <div class="title-order title-h3"> My orders: </div>

    <form id="msform">
        <ul id="progressbar">
          <li class="active ">Accepted</li>
          <li>In Process</li>
          <li>In the way</li>
          <li>Delivered</li>
        </ul>
    
        <fieldset>
          <div class="fs-title title-h4">Your order is accepted...</div>
        </fieldset>
        <fieldset>
          <div class="fs-title title-h4">Your order is being prepared...</div>
        </fieldset>
        <fieldset>
          <div class="fs-title title-h4">Your order has been delivered to the courier...</div>
        </fieldset>
        <fieldset>
          <div class="fs-title title-h4">Your order has been delivered!</div>
        </fieldset>
    </form>
    
</template>
<script>
export default {
  name: "UserPageUser",
};
</script>
<style></style>
