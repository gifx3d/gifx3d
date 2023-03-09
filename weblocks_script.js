var image, video, file, animated_file, no_shading, no_modelling, no_background, client_name, email, tos_agreement, category, output, description, information;

// Describe this function...
function refresh_form() {
  desc_instr_model();
  desc_instr_bg();
  desc_instr_shader();
  desc_box_anim();
  desc_box_render();
}

// Describe this function...
function check_output_selection() {
  return image == true || video == true || file == true || animated_file == true;
}

// Describe this function...
function output_selection_activation() {
  if (check_output_selection()) {

        nextTab = 'description';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=description]')).attr('prev-tab',we_activeTab);

        } else {

        nextTab = 'false';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=false]')).attr('prev-tab',we_activeTab);

        $('[bloc=next-tab]').removeClass('tab_button_active');
  }
}

// Describe this function...
function desc_instr_model() {
  if (no_modelling == true) {
    $('.inst_model_req').css({
      'display':'none',
    });
    $('.inst_no_model').css({
      'display':'block',
    });
    $('.inst_attach_ref').css({
      'display':'none',
    });
    $('.inst_attach_file').css({
      'display':'block',
    });
  } else {
    $('.inst_model_req').css({
      'display':'block',
    });
    $('.inst_no_model').css({
      'display':'none',
    });
    $('.inst_attach_ref').css({
      'display':'block',
    });
    $('.inst_attach_file').css({
      'display':'none',
    });
  }
}

// Describe this function...
function desc_instr_shader() {
  if (video == true || image == true) {
    if (no_shading == true) {
      $('.inst_shade_req').css({
        'display':'none',
      });
      $('.inst_no_shade').css({
        'display':'block',
      });
    } else {
      $('.inst_shade_req').css({
        'display':'block',
      });
      $('.inst_no_shade').css({
        'display':'none',
      });
    }
  } else {
    if (no_shading == true) {
      $('.inst_shade_req').css({
        'display':'none',
      });
      $('.inst_no_shade').css({
        'display':'none',
      });
    } else {
      $('.inst_shade_req').css({
        'display':'block',
      });
      $('.inst_no_shade').css({
        'display':'none',
      });
    }
  }
}

// Describe this function...
function desc_instr_bg() {
  if (no_background == false) {
    $('.inst_background_req').css({
      'display':'block',
    });
  } else {
    $('.inst_background_req').css({
      'display':'none',
    });
  }
}

// Describe this function...
function desc_box_anim() {
  if (video == true || animated_file == true) {
    $('.desc_anim_desc').css({
      'display':'block',
    });
  } else {
    $('.desc_anim_desc').css({
      'display':'none',
    });
  }
}

// Describe this function...
function desc_box_render() {
  $('.desc_render_desc').css({
    'display':'none',
  });
  $('.inst_image').css({
    'display':'none',
  });
  $('.inst_video').css({
    'display':'none',
  });
  $('.inst_render_count_image').css({
    'display':'none',
  });
  $('.inst_render_count_video').css({
    'display':'none',
  });
  $('.inst_render_count_both').css({
    'display':'none',
  });
  if (image == true) {
    $('.desc_render_desc').css({
      'display':'block',
    });
    $('.inst_image').css({
      'display':'block',
    });
    $('.inst_render_count_image').css({
      'display':'block',
    });
  }
  if (video == true) {
    $('.desc_render_desc').css({
      'display':'block',
    });
    $('.inst_video').css({
      'display':'block',
    });
    $('.inst_render_count_video').css({
      'display':'block',
    });
  }
  if (image == true && video == true) {
    $('.inst_render_count_image').css({
      'display':'none',
    });
    $('.inst_render_count_video').css({
      'display':'none',
    });
    $('.inst_render_count_both').css({
      'display':'block',
    });
  }
}

// Describe this function...
function submit_activation() {
  if (client_name != null && email != null && tos_agreement == true) {
    $('[bloc=submit]').addClass('tab_button_active');
  } else {
    $('[bloc=submit]').removeClass('tab_button_active');
  }
}


var we_tabs_next_button = '[bloc=next-tab]';
    var we_tabs_prev_button = '[bloc=prev-tab]';
    var we_tabs_active_class = 'tab_button_active';

    var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

    var tabList = ['category'];

    openTab(tabList[0]);

    $(we_tabs_next_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfNextTab = indexOfActiveTab + 1;
      var nextTab = tabList[indexOfNextTab];
      var amountOfTabs = tabList.length;
      var attrNextTab = $('.w--tab-active').attr('next-tab');

      openTab(attrNextTab);

      attrNextTab = $('.w--tab-active').attr('next-tab');

      if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
      }

      if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    $(we_tabs_prev_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfPrevTab = indexOfActiveTab - 1;
      var prevTab = tabList[indexOfPrevTab];

      var attrPrevTab = $('.w--tab-active').attr('prev-tab');

      if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      }

      if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
      } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    function openTab(tab) {
      var tab_link = "a[data-w-tab=" + tab;
      tab = "div[data-w-tab=" + tab;

      $(tab).siblings().removeClass("w--tab-active");
      $(tab).addClass("w--tab-active");
      $(tab_link).siblings("a").removeClass("w--current");
      $(tab_link).addClass("w--current");
    }$("[name=category]").on("input", function () {
    category = getValueFromInput("category");

      nextTab = 'output';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=output]')).attr('prev-tab',we_activeTab);

      });

    $("[name=category]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      category = getValueFromInput("category");

      nextTab = 'output';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=output]')).attr('prev-tab',we_activeTab);

      });
    $('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='output') {
          output_selection_activation();

      }});
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='description') {
          refresh_form();

        nextTab = 'information';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=information]')).attr('prev-tab',we_activeTab);


      }});
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='information') {
          submit_activation();

      }});

$("[name=image]").on("input", function () {
    image = getValueFromInput("image");
      output_selection_activation();
});

    $("[name=image]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      image = getValueFromInput("image");
        output_selection_activation();
});

$("[name=video]").on("input", function () {
    video = getValueFromInput("video");
      output_selection_activation();
});

    $("[name=video]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      video = getValueFromInput("video");
        output_selection_activation();
});

$("[name=file]").on("input", function () {
    file = getValueFromInput("file");
      output_selection_activation();
});

    $("[name=file]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      file = getValueFromInput("file");
        output_selection_activation();
});

$("[name=animated_file]").on("input", function () {
    animated_file = getValueFromInput("animated_file");
      output_selection_activation();
});

    $("[name=animated_file]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      animated_file = getValueFromInput("animated_file");
        output_selection_activation();
});

$("[name=no_shading]").on("input", function () {
    no_shading = getValueFromInput("no_shading");
      refresh_form();
});

    $("[name=no_shading]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      no_shading = getValueFromInput("no_shading");
        refresh_form();
});

$("[name=no_modelling]").on("input", function () {
    no_modelling = getValueFromInput("no_modelling");
      refresh_form();
});

    $("[name=no_modelling]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      no_modelling = getValueFromInput("no_modelling");
        refresh_form();
});

$("[name=no_background]").on("input", function () {
    no_background = getValueFromInput("no_background");
      refresh_form();
});

    $("[name=no_background]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      no_background = getValueFromInput("no_background");
        refresh_form();
});

$("[name=client_name]").on("input", function () {
    client_name = getValueFromInput("client_name");
      submit_activation();
});

    $("[name=client_name]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      client_name = getValueFromInput("client_name");
        submit_activation();
});

$("[name=email]").on("input", function () {
    email = getValueFromInput("email");
      submit_activation();
});

    $("[name=email]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      email = getValueFromInput("email");
        submit_activation();
});

$("[name=tos_agreement]").on("input", function () {
    tos_agreement = getValueFromInput("tos_agreement");
      submit_activation();
});

    $("[name=tos_agreement]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      tos_agreement = getValueFromInput("tos_agreement");
        submit_activation();
});
