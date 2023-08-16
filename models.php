<?php require('header.php');?>


<div class="wrap_models">
  <!------------------------------------------------------------->
  <div class="block_models_panel">
      <div class="panelUP">
        <h1>Модельний ряд</h1>
        <p><i>Який автомобіль Вам більш пасує ?</i> </p>
      </div>

      <div class="panelDown">
        <div class="menu_models_main">
          <ul class="model_list">
       <li class="btnModel1">Седани</li>
            <li class="btnModel2">Позашляховики</li>
            <li class="btnModel3">Купе</li>
            <li class="btnModel4">Мінівені</li>
            <li class="btnModel5">Універсали</li>
            <li class="btnModel6">Хетчбеки</li>
          </ul>
        </div>
        <div class="menu_models_list_DOP">
          <ul>
            <li class="btnModel1">Седани</li>
            <li class="btnModel2">Позашляховики</li>
            <li class="btnModel3">Купе</li>
            <li class="btnModel4">Мінівені</li>
            <li class="btnModel5">Універсали</li>
            <li class="btnModel6">Хетчбеки</li>
          </ul>
          </div>
        <div class="menu_models_subdiv">
            <div class="subdiv_center">
              <img class="subdiv_icon1" src="media/maybah.png" alt="">
              <img class="subdiv_icon2" src="media/eq.png" alt="">
              <img class="subdiv_icon3" src="media/amg.png" alt="">
            </div>
        </div>
      </div>
  </div>
<!------------------------------------------------------------->
<div class="models_content">
  
  <?php 
  $posts = [
    1 => ['photo' => "media/model1.png",'title' => "Седан",'price' => "2 055 360" ],
    2 => ['photo' => "media/model1.png",'title' => "Седан",'price' => "3 055 360" ],
    3 => ['photo' => "media/model1.png",'title' => "Седан",'price' => "4 055 360" ],
    4 => ['photo' => "media/model1.png", 'title' => "Седан", 'price' => "5 055 360"],
  ];
  foreach ($posts as $post):?>
<div class="card_model model1">
<div class="card_model_name"><p><?= $post['title']; ?></p><span>(от <?= $post['price']; ?> ₴ )</span></div>
<div class="card_model_foto"><img class="modelAuto" src="<?= $post['photo']; ?>" alt=""></div>
<div class="card_model_buttons">
<div class="btnOrder"><a href="templateAuto.php">Замовити</a></div>
</div>
</div>
<?php endforeach; ?>
<!------------------------------------>
<?php 
  $posts = [
    1 => ['photo' => "media/model5.png",'title' => "Позашляховик",'price' => "2 055 360" ],
    2 => ['photo' => "media/model5.png",'title' => "Позашляховик",'price' => "3 055 360" ],
    3 => ['photo' => "media/model5.png",'title' => "Позашляховик",'price' => "4 055 360" ],
    4 => ['photo' => "media/model5.png", 'title' => "Позашляховик", 'price' => "5 055 360"],
  ];
  foreach ($posts as $post):?>
<div class="card_model model2">
<div class="card_model_name"><p><?= $post['title']; ?></p><span>(от <?= $post['price']; ?> ₴ )</span></div>
<div class="card_model_foto"><img class="modelAuto" src="<?= $post['photo']; ?>" alt=""></div>
<div class="card_model_buttons">
<div class="btnOrder"><a href="templateAuto.php">Замовити</a></div>
</div>
</div>
<?php endforeach; ?>
<!------------------------------------>
<?php 
  $posts = [
    1 => ['photo' => "media/model2.png",'title' => "Купе",'price' => "2 055 360" ],
    2 => ['photo' => "media/model2.png",'title' => "Купе",'price' => "3 055 360" ],
    3 => ['photo' => "media/model2.png",'title' => "Купе",'price' => "4 055 360" ],
    4 => ['photo' => "media/model2.png", 'title' => "Купе", 'price' => "5 055 360"],
  ];
  foreach ($posts as $post):?>
<div class="card_model model3">
<div class="card_model_name"><p><?= $post['title']; ?></p><span>(от <?= $post['price']; ?> ₴ )</span></div>
<div class="card_model_foto"><img class="modelAuto" src="<?= $post['photo']; ?>" alt=""></div>
<div class="card_model_buttons">
<div class="btnOrder"><a href="templateAuto.php">Замовити</a></div>
</div>
</div>
<?php endforeach; ?>
<!------------------------------------>
<?php 
  $posts = [
    1 => ['photo' => "media/model4.png",'title' => "Мінівен",'price' => "2 055 360" ],
    2 => ['photo' => "media/model4.png",'title' => "Мінівен",'price' => "3 055 360" ],
    3 => ['photo' => "media/model4.png",'title' => "Мінівен",'price' => "4 055 360" ],
    4 => ['photo' => "media/model4.png", 'title' => "Мінівен", 'price' => "5 055 360"],
  ];
  foreach ($posts as $post):?>
<div class="card_model model4">
<div class="card_model_name"><p><?= $post['title']; ?></p><span>(от <?= $post['price']; ?> ₴ )</span></div>
<div class="card_model_foto"><img class="modelAuto" src="<?= $post['photo']; ?>" alt=""></div>
<div class="card_model_buttons">
<div class="btnOrder"><a href="templateAuto.php">Замовити</a></div>
</div>
</div>
<?php endforeach; ?>
<!------------------------------------>
<?php 
  $posts = [
    1 => ['photo' => "media/carMers.png",'title' => "Універсал",'price' => "2 055 360" ],
    2 => ['photo' => "media/carMers.png",'title' => "Універсал",'price' => "3 055 360" ],
    3 => ['photo' => "media/carMers.png",'title' => "Універсал",'price' => "4 055 360" ],
    4 => ['photo' => "media/carMers.png", 'title' => "Універсал", 'price' => "5 055 360"],
  ];
  foreach ($posts as $post):?>
<div class="card_model model5">
<div class="card_model_name"><p><?= $post['title']; ?></p><span>(от <?= $post['price']; ?> ₴ )</span></div>
<div class="card_model_foto"><img class="modelAuto" src="<?= $post['photo']; ?>" alt=""></div>
<div class="card_model_buttons">
<div class="btnOrder"><a href="templateAuto.php">Замовити</a></div>
</div>
</div>
<?php endforeach; ?>
<!------------------------------------>
<?php 
  $posts = [
    1 => ['photo' => "media/model3.png",'title' => "Хетчбек",'price' => "2 055 360" ],
    2 => ['photo' => "media/model3.png",'title' => "Хетчбек",'price' => "3 055 360" ],
    3 => ['photo' => "media/model3.png",'title' => "Хетчбек",'price' => "4 055 360" ],
    4 => ['photo' => "media/model3.png", 'title' => "Хетчбек", 'price' => "5 055 360"],
  ];
  foreach ($posts as $post):?>
<div class="card_model model6">
<div class="card_model_name"><p><?= $post['title']; ?></p><span>(от <?= $post['price']; ?> ₴ )</span></div>
<div class="card_model_foto"><img class="modelAuto" src="<?= $post['photo']; ?>" alt=""></div>
<div class="card_model_buttons">
<div class="btnOrder"><a href="templateAuto.php">Замовити</a></div>
</div>
</div>
<?php endforeach; ?>
<!------------------------------------>
</div>
</div>


<?php require('footer.php');?>
