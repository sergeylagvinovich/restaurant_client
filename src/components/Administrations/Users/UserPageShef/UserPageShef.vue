<template>
   
    <div class="user-title"></div>
    <div class="user-avatar">
        <img src="/images/team-2.jpg" alt="">
    </div>
    <div class="user-info">
        <div class="user-dolznost">Master Shef</div>
        <div class="user-name title-h4">Emil Anderson</div>
    </div>
    <div class="title-order title-h3"> Orders: </div>
    <div class="check-order">
        <div class="frame">
            <div class="center">
                <section class="todo-cmp">
                    <header class="todo-cmp__header">
                        <div class="title-h6 order-filter title-thin">Seafood</div>
                        <div class="title-h5 order-name">Pasta with mussels</div>
                    </header>
                    <ul class="todo-cmp__list">
                        <li>
                            <label for="todo-01">
                                <input id="todo-01" type="checkbox">
                                <span>Start</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-02">
                                <input id="todo-02" type="checkbox">
                                <span>Preparation</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-03">
                                <input id="todo-03" type="checkbox">
                                <span>In process</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-04">
                                <input id="todo-04" type="checkbox">
                                <span>Done</span>
                            </label>
                        </li>
                    </ul>
                    <button class="button button-size-small button-style-outline button-complete">Complete</button>
                </section>
            </div>
        </div>

        <div class="frame">
            <div class="center">
                <section class="todo-cmp">
                    <header class="todo-cmp__header">
                        <div class="title-h6 order-filter title-thin">Salad</div>
                        <div class="title-h5 order-name">Salad Caesar</div>
                    </header>
                    <ul class="todo-cmp__list">
                        <li>
                            <label for="todo-05">
                                <input id="todo-05" type="checkbox">
                                <span>Start</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-06">
                                <input id="todo-06" type="checkbox">
                                <span>Preparation</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-07">
                                <input id="todo-07" type="checkbox">
                                <span>In process</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-08">
                                <input id="todo-08" type="checkbox">
                                <span>Done</span>
                            </label>
                        </li>
                    </ul>
                    <button class="button button-size-small button-style-outline button-complete">Complete</button>
                </section>
            </div>
        </div>

        <div class="frame">
            <div class="center">
                <section class="todo-cmp">
                    <header class="todo-cmp__header">
                        <div class="title-h6 order-filter title-thin">Meat</div>
                        <div class="title-h5 order-name">Lamb steak</div>
                    </header>
                    <ul class="todo-cmp__list">
                        <li>
                            <label for="todo-09">
                                <input id="todo-09" type="checkbox">
                                <span>Start</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-10">
                                <input id="todo-10" type="checkbox">
                                <span>Preparation</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-11">
                                <input id="todo-11" type="checkbox">
                                <span>In process</span>
                            </label>
                        </li>
                        <li>
                            <label for="todo-12">
                                <input id="todo-12" type="checkbox">
                                <span>Done</span>
                            </label>
                        </li>
                    </ul>
                    <button class="button button-size-small button-style-outline button-complete">Complete</button>
                </section>
            </div>
        </div>
    </div>   
    
</template>
<script>
export default {
  name: "UserPageShef",
};
</script>
<style></style>
