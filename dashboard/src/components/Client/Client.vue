<!-- CSS -->
<style lang="stylus" src="./Client.styl"></style>
<!-- Bootstrap -->
<style src="../../assets/css/layout/bootstrap.min.css"></style>
<style src="../../assets/css/layout/fc2-new.css"></style>
<style src="../../assets/css/layout/circle.css"></style>
<style src="../../assets/css/layout/font-awesome.min.css"></style>

<template>
  <div class="wrapper">
    <div class="client" v-if="client != null">
      <div class="fc2_container row">
        <div class="fc2_sidebar">
          <div class="fc2_identity">
            <div class="toggle-fs">
              <i class="fa fa-expand"></i>
            </div>
            <div class="fc2_flag" data-toggle="tooltip" data-placement="bottom" title="Spoken language: French, English">
              <img src="../../assets/images/flags/FR.png" alt="fr_flag">
            </div>
            <div class="fc2_client_info">
              <div class="fc2_client_name">{{ client.firstname }}  <span class="name">{{ client.lastname }}</span></div>
              <div class="fc2_client_mail" data-toggle="modal" data-target=".modal-email">{{ client.email }} <i class="fa fa-pencil"></i></div>
            </div>
            <div class="fc2_client_company" >Company : <span class="name">{{ client.company }}</span>
              <div class="fc2_bloc_expandable collapse">
                SC: <span class="name">SIL2015</span><br/>
                PMID : <span class="name">0987609876</span><br/>
                Birth Date : <span class="name">06/07/1990</span>
              </div>
              <!-- onclick="customCollapse()" -->
              <a class="fc2_see_more nofloat" id="fc2_see_more" data-toggle="collapse" href=".fc2_bloc_expandable" aria-expanded="false">
                <strong>See more</strong>
                <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
              </a>

            </div>
            <div class="collapse fc2_bloc_expandable">
              <div class="fc2_seeMore_content">
                <div class="fc2_seeMore_item">
                  <div class="fc2_item_title" data-toggle="collapse" data-target="#item-1">
                    <h4>Information <i class="fa fa-chevron-down pull-right"></i></h4>
                  </div>
                  <div class="fc2_item_content collapse" id="item-1">
                    <div class="fc2_item_info">
                      <span class="fc2_item_headline">Professional address</span><br>
                      <span class="fc2_item_subContent">23 Rue D'Anjou</span><br>
                      <span class="fc2_item_subContent">Paris, France</span><br>
                    </div>
                    <div class="fc2_item_info">
                      <span class="fc2_item_headline"><strong>Billing address</strong></span><br>
                      <span class="fc2_item_subContent">IBM</span><br>
                      <span class="fc2_item_subContent">17 avenue de l'Europe</span><br>
                      <span class="fc2_item_subContent">Bois Colombes, France</span><br>
                      <span class="fc2_item_subContent">FR91 552118465</span><br>
                      <span class="fc2_item_subContent">X8405 684 388460</span><br>
                    </div>
                    <div class="fc2_item_info">
                      <span class="fc2_item_headline">Personal address</span><br>
                      <span class="fc2_item_subContent">18 avenue Félix Faure</span><br>
                      <span class="fc2_item_subContent">Paris, France</span><br>
                    </div>
                    <div class="fc2_item_info">
                      <span class="fc2_item_headline">Phone number</span><br>
                      <span class="fc2_item_subContent"><i class="fa fa-briefcase fc2_icon_align"></i> 0033 666332211 </span><br>
                      <span class="fc2_item_subContent"><span class="fc2_icon_align"><img src="../../assets/images/glasses_active.png" /></span> 0033 666332211 </span><br>
                    </div>
                    <div class="fc2_item_info">
                      <span class="fc2_item_headline">Email</span><br>
                      <span class="fc2_item_subContent"><i class="fa fa-briefcase fc2_icon_align"></i> fabrice.vairet@ibm.com (main)</span><br>
                      <span class="fc2_item_subContent"><span class="fc2_icon_align"><img src="../../assets/images/glasses_active.png" /></span> f.vairet@gmail.com </span><br>
                    </div>
                  </div>
                </div>

                <div class="fc2_seeMore_item">
                  <div class="fc2_item_title" data-toggle="modal" data-target="#fc2_subscription_modal">
                    <h4>Subscriptions <i class="fa fa-external-link pull-right"></i></h4>
                  </div>
                </div>

                <div class="fc2_seeMore_item">
                  <div class="fc2_item_title" data-toggle="collapse" data-target="#item-3">
                    <h4>Travelling documents <i class="fa fa-chevron-down pull-right"></i></h4>

                  </div>
                  <div class="fc2_item_content collapse" id="item-3">
                    <div class="fc2_item_info">
                      <span class="fc2_item_headline">Passeport</span><br>
                      <span class="fc2_item_subContent">Français</span><br>
                      <span class="fc2_item_subContent">N° 1225445</span><br>
                      <span class="fc2_item_subContent">Expiration date: 12/06/2019</span><br>
                      <br/>
                      <span class="fc2_item_headline">ID Card</span><br>
                      <span class="fc2_item_subContent">English</span><br>
                      <span class="fc2_item_subContent">N° 1225445</span><br>
                      <span class="fc2_item_subContent">Expiration date: 12/06/2019</span><br>
                    </div>
                  </div>
                </div>

                <div class="fc2_seeMore_item">
                  <div class="fc2_item_title" data-toggle="collapse" data-target="#item-4">
                    <h4>Travelling companions <i class="fa fa-chevron-down pull-right"></i></h4>

                  </div>
                  <div class="fc2_item_content collapse" id="item-4">
                    <div class="fc2_item_info">
                      <div class="fc2_item_subContent">First child</div>
                      <div class="fc2_item_subContent right">3 months old</div><br>
                      <div class="fc2_item_subContent">Second child</div>
                      <div class="fc2_item_subContent right">10 years old</div><br>
                    </div>

                  </div>
                </div>


              </div>
            </div>

          </div>
          <div class="fc2_todo">
            <div class="fc2_todo_title">To do - To say</div>
            <div class="fc2_tag_list">

              <div class="fc2_tag">
                <span class="fc2_tag_name">#CheckProblems</span>
              </div>
              <!-- <div class="fc2_tag">
                <span class="fc2_tag_name">#EarnPoints</span>
              </div> -->
              <div class="fc2_tag">
                <span class="fc2_tag_name">#CheckPref</span>
              </div>
              <div class="fc2_tag"  data-toggle="tooltip" data-placement="bottom" title="We are one family we would like to have connecting rooms if possible and a babycrib. Thanks a lot">
                <span class="fc2_tag_name">#SpecificRequest</span>
                <i class="fa fa-info-circle"></i>
              </div>
            </div>
          </div>

          <div class="fc2_clubs">
            <ul class="nav nav-tabs fc2_tabs">
              <li role="presentation" class="fc2_tab_left col-xs-5 active"><a data-toggle="tab" data-target="#club">Le Club AccorHotels</a></li>
              <li role="presentation" class="fc2_tab_right col-xs-4"><a data-toggle="tab" data-target="#ibis">Ibis business</a></li>
              <li role="presentation" class="fc2_tab_right col-xs-3"><a data-toggle="tab" data-target="#autres">Autres</a></li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="club">
                <div class="fc2_tabpanel_content">
                  <div class="fc2_badge_circle">
                    Gold
                  </div>
                  <!-- <span class="fc2_club_name">Le Club AccorHotels</span> -->
                </div>
                <div class="fc2_progress-bar-container">
                  <div class="fc2_progress-bar">
                    <div class="plat-dot">

                    </div>
                    <div class="fc2_progress">

                      <div class="progress-dot">
                        <div class="text-dot">
                          <strong class="blue">18 000 PTS = 360€</strong><br/>
                          Only 7000 points or 7 nights<br/>
                          to get platinum
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="pull-left">
                      You should get around 1400 pts
                    </div>
                    <div class="pull-right text-right">
                      PLATINUM<br/>
                      <strong class="blue">25 000PTS or 25 nights</strong>
                    </div>
                  </div>
                </div>
                <p style="color: #333" class="see-more-club-accor collapse col-xs-12">
                  N° 1345446575<br/>
                  Expiration date : 08/29/2017<br/>
                  Terms of use : 01/21/2016<br/>
                </p>
                <div style="color: #333" class="col-xs-12 text-right fc2_seemore collapsed clearfix" data-toggle="collapse" href=".see-more-club-accor">
                  <br/>
                  <strong>See more</strong> <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                </div>
                <div class="clearfix"></div>
              </div>
              <div role="tabpanel" class="tab-pane" id="ibis">
                <div class="fc2_tabpanel_content">
                  <!-- <span class="fc2_club_name">Ibis business <strong class="red-txt">(Expired)</strong></span> -->
                </div>
                <div class="client_card_container">
                  <br>
                  <div class="col-xs-4">
                    <img class="client_card" src="../../assets/images/ibis_business_card.jpg" alt="ibis card">
                  </div>
                  <div class="col-xs-8 no-p-left">
                    <strong>Carte IBIS Business <small class="red-txt">(Expired)</small></strong>
                    <p>
                      Expiration date : 31/10/2015<br>
                      CGV : 04/10/2014
                    </p>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
              <div role="tabpanel" class="tab-pane" id="autres">
                <div class="fc2_tabpanel_content">
                  <!-- <span class="fc2_club_name">Ibis business <strong class="red-txt">(Expired)</strong></span> -->
                </div>
                <div class="client_card_container">
                  <br>
                  <div class="col-xs-4">
                    <img class="client_card" src="../../assets/images/ibis_business_plus.png" alt="ibis card">
                  </div>
                  <div class="col-xs-8 no-p-left">
                    <strong>BUSINESS PLUS</strong>
                    <p>
                      Expiration date : 30/06/2017<br>
                      CGV : 15/06/2016
                    </p>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>

          <div class="fc2_stays">
            <div class="row">
              <div class="col-xs-4">
                <img width="34" src="../../assets/images/novotel-32.png" alt="">
                <div class="fc2_stays_number"><strong>3</strong> stays</div>
              </div>
              <div class="col-xs-4">
                <img width="34" src="../../assets/images/ibis-styles-48.png" alt="">
                <div class="fc2_stays_number"><strong>2</strong> stays</div>
              </div>
              <div class="col-xs-4">
                <img width="34" src="../../assets/images/ibis-red-48.png" alt="">
                <div class="fc2_stays_number"><strong>4</strong> stays</div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-4">
                <div class="fc2_isMyHotel">1 in my hotel 03/04/2010</div>
              </div>
            </div>
          </div>
          <div class="fc2_grades">
            <div class="row">
              <div class="col-xs-5">
                <span class="fc2_grade_name">Last grade</span>
                <div class="fc2_grade_square">
                  <div class="fc2_grade_value green"><span class="fc2_big_number">9</span>/10</div>
                </div>
              </div>
              <div class="col-xs-7">
                <span class="fc2_grade_name">Overall satisfaction</span>
                <div class="fc2_grade_square">
                  <div class="fc2_grade_value orange"><span class="fc2_big_number">7</span>/10</div>
                </div>
              </div>
            </div>
          </div>
          <div class="fc2_tabpanel_content fc2_the_pref fc2_border-top">
            <div class="fc2_badge_circle pull-left fc2_pref_badge gold">
              <i class="fa fa-star fa-2x"></i>
            </div>
            <span class="fc2_club_name pull-left" style="display:block; width:calc(100% - 50px)">
            <small>Gluten free </small><br/>
            <small>AC : Off </small>
              </br/>
          </span>
            <div class="clearfix">

            </div>
          </div>
        </div>

        <div class="fc2_content">
          <ul class="nav nav-tabs ">
            <li role="presentation" class="fc2_content_tab active"><a data-toggle="tab" data-target="#resume"><i class="fa fa-star"></i> Resume</a></li>
            <li role="presentation" class="fc2_content_tab"><a data-toggle="tab" data-target="#pref"> Preferences</a></li>
            <li role="presentation" class="fc2_content_tab"><a data-toggle="tab" data-target="#satisf">Satisfaction</a></li>
            <li role="presentation" class="fc2_content_tab"><a data-toggle="tab" data-target="#stay">Stay</a></li>
          </ul>

          <div class="tab-content">





            <div role="tabpanel" id="resume" class="tab-pane active">

              <!-- Resume -->

              <div class="container">
                <div class="col-sm-9">

                  <div class="valueProposition">
                    <h3>To do - Value Proposition</h3>
                    <small>click on the icon to change propositions</small>
                    <div class="row">
                      <div class="col-sm-4">
                        <i class="fa fa-female fa-2x" v-on:click="showPropositionBeh" id="fa-comportement" aria-hidden="true"> </i>
                        <p id="behaviorProposition">{{myBehaviorArray[0]}}</p>
                      </div>
                      <div class="col-sm-4">
                        <i class="fa fa-thumbs-up fa-2x" v-on:click="showPropositionInf" id="fa-influence" aria-hidden="true"></i>
                        <p id="influenceProposition">{{myInfluenceArray[0]}}</p>
                      </div>
                      <div class="col-sm-4">
                        <i class="fa fa-gift fa-2x" v-on:click="showPropositionPot" id="fa-potential" aria-hidden="true"></i>
                        <p id="potentialProposition">{{myPotentialArray[0]}}</p>
                      </div>
                    </div>
                  </div>
                  <!-- END ValueProposition-->
                  <div id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="card">
                      <div class="card-header" role="tab" id="headingThree">
                        <button class="collapsed" data-toggle="collapse" data-parent="#accordion" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" v-on:click="activateClass">
                          <i id="iconCollapse" class="fa fa-arrow-down"  aria-hidden="true"></i>
                        </button>

                      </div>
                      <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="card-block">
                          <textarea rows="6" placeholder="You can add informations you detect on our clients"></textarea>
                          <a>save</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="col-sm-9">
                  <div class="row">
                    <div class="col-sm-4">
                      <div id="comportementBanner" class="main">
                        <h3>behavior</h3>
                        <div class="canvas-container">
                          <canvas id="behaviorChart" height="100%" width="100%"></canvas>
                          <p class="chart-score" v-if="behaviorChartScore">{{Math.round(behaviorChartScore)}}</p>
                        </div>
                        <hr>
                        <ul>
                          <li><i class="fa fa-signal" ></i>
                            <p>Frequency <br>
                              <small>{{clientfrequency}} times / year</small>
                            </p>
                          </li>
                          <li><i class="fa fa-hourglass" ></i>
                            <p>Duration <br>
                              <small>{{clientduration}} day</small>
                            </p>
                          </li>
                          <li><i class="fa fa-calendar" ></i>
                            <p>Seniority <br>
                              <small>{{ clientseniority }}  years</small>
                            </p>
                          </li>
                        </ul>
                        <div>
                          <button>see more</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div id="influenceBanner" class="main">
                        <h3>influence</h3>
                        <div class="canvas-container">
                          <canvas id="influenceChart" height="100%" width="100%"></canvas>
                          <p class="chart-score" v-if="influenceChartScore">{{Math.round(influenceChartScore)}}</p>
                        </div>
                        <hr>
                        <h4 >Favorite Topics</h4>
                        <ul>
                          <li v-for="topic in topics" :key="topic.id" class="topics">{{ topic.displayName}}</li>
                        </ul>
                        <div>
                          <button>see more</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div id="potentielBanner" class="main">
                        <h3>potential</h3>
                        <div class="canvas-container">
                          <canvas id="potentialChart" height="100%" width="100%"></canvas>
                          <p class="chart-score" v-if="potentialChartScore">{{Math.round(potentialChartScore)}}</p>
                        </div>
                        <hr>
                        <ul>
                          <li><i class="fa fa-bed" ></i>
                            <p>Room Type <br>
                              <small>{{clientroomtype}}</small>
                            </p>
                          </li>
                          <li><i class="fa fa-cutlery" ></i>
                            <p>Food & Beverage <br>
                              <small>{{clientfood}}</small>
                            </p>
                          </li>
                          <li><i class="fa fa-hand-peace-o" ></i>
                            <p>Extras <br>
                              <small>{{clientextras}} €</small>
                            </p>
                          </li>
                        </ul>
                        <div>
                          <button>see more</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div role="tabpanel" id="pref" class="tab-pane">
              <div class="fc2_section_tab">
                <div class="fc2_section_title">Request for the stay - <span>Stay 11/05/15 to 11/15/15</span>
                </div>
                <div class="fc2_section_content highlight fc2_request">
                  <div class="row">
                    <div class="col-xs-6">
                      <h4 class="title-4">Booker</h4>
                      <p>The babycrib is necessary only for the 2 first nights</p>
                    </div>
                    <div class="col-xs-6">
                      <h4 class="title-4">Customer</h4>
                      <p>We are one family we would like to have connection rooms if possible and a babycrib. Thanks a lot</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="fc2_section_tab">
                <div class="fc2_section_title">
                  Preferences for the guest
                  <div class="fc2_title_buttons">
                    <div class="pull-right">
                      <select class="styled-select tiny" name="favs" id="">
                        <option value="">In AccorHotels</option>
                        <option value="">In my Brand</option>
                        <option value="">In my Hotel</option>
                      </select>
                    </div>
                    <button data-toggle="modal" data-target=".modal-add-preference" type="button" class="button custom-button pull-right"><i class="fa fa-plus"></i> Add new preference</button>

                  </div>
                </div>
                <div class="fc2_section_content  fc2_pref">
                  <div class="row fc2_preferences_item">
                    <span class="add-comment"><a data-toggle="modal" data-target=".modal-add-comment">+ Add a comment</a></span>
                    <div class="col-xs-1 no-p-left">
                      <div class="fc2_pref_badge gold">
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="fc2_preferences_param col-xs-11">
                      <h4>Favorite Preference</h4><br>
                      <div class="row margin-neg">
                        <div class="col-xs-4">
                          <span class="fc2_pref_tag first">Gluten free<i class="fa fa-pencil icon-blue"></i></span><br/>
                          <span class="fc2_pref_tag first">AC : Off<i class="fa fa-pencil icon-blue"></i></span>
                        </div>
                        <div class="col-xs-8">
                          <div class="fc2_param_notif tag-highlight" data-toggle="tooltip" data-placement="bottom" title="The customer has taken a 8th subscription because he loves the spa, the reception and the quality of care">
                            <p>
                              <strong>Novotel Paris, France</strong> <span class="editable-comment-pref">"The customer has taken a 8th subscription because he loves the spa, the reception and the quality of care" -</span>
                              <span class="date">2 days ago</span>
                            </p>
                          </div>
                        </div>

                      </div>



                    </div>
                  </div>

                  <div class="row fc2_preferences_item">
                    <span class="add-comment"><a data-toggle="modal" data-target=".modal-add-comment">+ Add a comment</a></span>
                    <div class="col-xs-1  no-p-left">
                      <div class="fc2_pref_badge">
                        <i class="fa fa-bed"></i>
                      </div>
                    </div>
                    <div class="fc2_preferences_param col-xs-11">
                      <h4>Room</h4><br>
                      <span data-toggle="modal" data-target=".modal-smoking" class="fc2_pref_tag first">Non-smoking Room
                      <i class="fa fa-user icon-green"></i>
                      <i class="fa fa-pencil icon-blue"></i>
                    </span>
                      <span class="tag-highlight fc2_pref_tag">Balcony <i class="fa fa-pencil icon-blue"></i></span>
                      <span class="fc2_pref_tag">AC : Off
                      <i class="fa fa-star icon-gold"></i><i class="fa fa-pencil icon-blue"></i>
                    </span>
                      <span class="tag-highlight fc2_pref_tag">Ocean Front view<i class="fa fa-pencil icon-blue"></i></span>
                      <span class="fc2_pref_tag first">Extra shampoo
                      <i class="fa fa-pencil icon-blue"></i>
                      <span class="fc2_pref_notif ">new</span>
                    </span>
                    </div>
                  </div>

                  <div class="row fc2_preferences_item">
                    <span class="add-comment"><a data-toggle="modal" data-target=".modal-add-comment">+ Add a comment</a></span>
                    <div class="col-xs-1  no-p-left">
                      <div class="fc2_pref_badge">
                        <i class="fa fa-cutlery"></i>
                      </div>
                    </div>
                    <div class="fc2_preferences_param col-xs-11">
                      <h4>F&B</h4><br>
                      <span class="fc2_pref_tag first">Gluten Free
                      <i class="fa fa-star icon-gold"></i>
                      <i class="fa fa-pencil icon-blue"></i>
                    </span>

                    </div>
                  </div>

                  <div class="row fc2_preferences_item">
                    <span class="add-comment"><a data-toggle="modal" data-target=".modal-add-comment">+ Add a comment</a></span>
                    <div class="col-xs-1  no-p-left">
                      <div class="fc2_pref_badge">
                        <i class="fa fa-futbol-o"></i>
                      </div>
                    </div>
                    <div class="fc2_preferences_param col-xs-11">
                      <h4>Interests</h4><br>
                      <span class="fc2_pref_tag first">Rugby
                      <i class="fa fa-pencil icon-blue"></i>
                      <span class="fc2_pref_notif ">new</span>
                    </span>
                      <div class="fc2_param_footer">
                        <div class="fc2_param_notif tag-highlight" data-toggle="tooltip" data-placement="bottom" title="The customer has taken a 8th subscription because he loves the spa, the reception and the quality of care">
                          <p>
                            <strong>Novotel Paris, France</strong> <span class="editable-comment-pref">"The customer has taken a 8th subscription because he loves the spa, the reception and the quality of care" -</span>
                            <span class="date">2 days ago</span>
                          </p>
                          <div class="fc2_notif_cta">
                            <i class="fa fa-pencil icon-blue js-edit-comment-pref"></i>
                            <i class="fa fa-times icon-blue js-delete-this-comment-pref"></i>
                          </div>
                        </div>
                        <br/>
                        <div class="fc2_param_notif" data-toggle="tooltip" data-placement="bottom" title="The customer has taken a 8th subscription because he loves the spa, the reception and the quality of care">
                          <p>
                            <strong>Novotel Paris, France</strong> <span class="editable-comment-pref">"The customer likes flowers" -</span>
                            <span class="date">15 days ago</span>
                          </p>
                          <div class="fc2_notif_cta">
                            <i class="fa fa-pencil icon-blue"></i>
                            <i class="fa fa-times icon-blue"></i>
                          </div>
                        </div>
                        <br/>
                        <div class="fc2_param_notif" data-toggle="tooltip" data-placement="bottom" title="The customer has taken a 8th subscription because he loves the spa, the reception and the quality of care">
                          <p>
                            <strong>Novotel Paris, France</strong> <span class="editable-comment-pref">"The customer likes rugby" -</span>
                            <span class="date">1 month ago</span>
                          </p>
                          <div class="fc2_notif_cta">
                            <i class="fa fa-pencil icon-blue"></i>
                            <i class="fa fa-times icon-blue"></i>
                          </div>
                        </div>
                        <div class="fc2_paramInputGroup">

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

            <div role="tabpanel" id="satisf" class="tab-pane">
              <div class="fc2_section_tab">
                <div class="fc2_section_content fc2_pref">
                  <div class="row fc2_preferences_item">
                    <h5>Add a Guest Experience Tracking</h5>

                    <div class="col-xs-6">

                    </div>

                    <div class="media media-search" style="margin-bottom:15px">
                      <div class="media-body">
                        <div class="col-xs-6">
                          <select class="form-control styled-select js-select-complaint">
                            <option value="Other" disabled="disabled" selected="selected" hidden="hidden">Choose a complaint category*</option>
                            <option >Bar</option>
                            <option >Bathroom</option>
                            <option >Hotel Services</option>
                            <option >Hotel facilities</option>
                            <option >Hotel team</option>
                            <option >Le Club AccorHotels</option>
                            <option >Other</option>
                            <option >Relocation</option>
                            <option >Restaurant</option>
                            <option >Room</option>
                          </select>
                        </div>
                        <div class="col-xs-6 text-right">
                          <span class="js-collapse-selects hide"><i class="fa fa-chevron-up fa-lg"></i></span>
                        </div>
                      </div>
                    </div>

                    <div class="collapse js-search-collapse">
                      <div class="col-xs-6">
                        <div class="media media-search">
                          <div class="media-body">
                            <select class="form-control liste-broken">
                              <option value="Other" disabled="disabled" selected="selected" hidden="hidden">Reason*</option>
                              <option >Incident</option>
                              <option >Information</option>
                              <option >Negative feedback</option>
                              <option >Wahoo Effect/Sparkles</option>
                            </select>
                          </div>
                        </div>

                        <div class="media media-search">
                          <div class="media-body">
                            <select class="form-control liste-issues">
                              <option value="" disabled="" selected="" hidden="hidden">Select a compensation*</option>
                              <option>Complementary night during the stay</option>
                              <option>Complementary night for the next stay</option>
                              <option>Courtesy points</option>
                              <option>Discount</option>
                              <option>Extras (spa, drink, wifi premium access, etc...)</option>
                              <option>Free breakfast/meal</option>
                              <option>No compensation proposed</option>
                              <option>Other</option>
                              <option>Room repayment</option>
                              <option>Specific speech(apologies)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <textarea name="contenu" class="form-control js-comment-get" rows="2" placeholder="Write a comment (optional)"></textarea>
                      </div>
                      <div class="clearfix"></div>
                      <div class="media media-search">
                        <div class="media-body">
                          <div class="col-xs-8">
                            <div class="row select-satisfaction">

                              Select the client satisfaction *
                              <br>
                              <br>
                              <div class="col-xs-4"><i class="fa client-satisfaction fa-smile-o grey fa-3x" data-id="good"></i></div>
                              <div class="col-xs-4"><i class="fa client-satisfaction fa-meh-o grey fa-3x" data-id="medium"></i></div>
                              <div class="col-xs-4"><i class="fa client-satisfaction fa-frown-o grey fa-3x" data-id="bad"></i></div>
                            </div>
                          </div>
                          <div class="col-xs-4">
                            <div class="button-group pull-right">
                              <button class="btn btn-primary text-uppercase insert-tracking" data-id="ee43d9a5-30d2-4503-b657-2682644c5e4e" data-name="Benefits">SAVE</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>


            <div role="tabpanel" class="tab-pane " id="stay">
              <div class="fc2_section_tab stay">
                <div class="fc2_stay_bloc">
                  <div class="margin-neg">
                    <div class="col-xs-3">
                      <a href="#" class="fc2_stay_type fc2_valid active">All ( 27 stays )</a>
                    </div>
                    <div class="col-xs-3">
                      <a href="#" class="fc2_stay_type fc2_leisure">Leisure</a>
                    </div>
                    <div class="col-xs-3">
                      <a href="#" class="fc2_stay_type fc2_work">Business</a>
                    </div>
                    <div class="col-xs-3 no-border">
                      <select class="styled-select">
                        <option>In AccorHotels</option>
                        <option selected>In my Brand</option>
                        <option>In my Hotel</option>
                      </select>
                    </div>
                  </div>

                  <div class="fc2_circle">
                    <div class="row">
                      <div class="col-xs-3">
                        <div class="c100 p25 small">
                          <span><div class="fc2_bed"></div></span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <div class="fc2_circle_legend">
                          <h4>Room type</h4>
                          <p><span class="bold">10/27</span> stays
                            <em>classic</em></p>
                        </div>
                      </div>
                      <div class="col-xs-3">
                        <div class="c100 p75 small">
                          <span><div class="fc2_food"></div></span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <div class="fc2_circle_legend">
                          <h4>Food & Beverage</h4>
                          <p><span class="bold">20/27</span> stays</p>
                        </div>
                      </div>
                      <div class="col-xs-3">
                        <div class="c100 p0 small">
                          <span><div class="fc2_swim"></div></span>
                          <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                          </div>
                        </div>
                        <div>
                          <div class="fc2_circle_legend">
                            <h4>Extras</h4>
                            <p><span class="bold">0/27</span> stays</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="fc2_stay_ellipse">
                    <div class="col-xs-5">Average Room Nights <strong>5</strong></div>
                    <div class="col-xs-5">Av Turnover / night <strong>140 €</strong></div>
                  </div>
                </div>
                <div class="fc2_section_title fc2_section_booking">
                  Booking details
                </div>

                <ul class="list-group table-wrapper">
                  <li class="list-group-item fc2_last_stay">
                    <div class="margin-neg row">
                      <div class="col-xs-12">
                        <div class="media">
                          <div class="media-left media-middle">
                            <div class="fc2_hotel_logo fc2_novotel"></div>
                          </div>
                          <div class="media-body">
                            <div class="fc2_stay_type fc2_work"></div><strong class="fc2_main">Stay at this hotel</strong>  01/07/2016 to 06/01/2016<br/>
                            Booked 4 days ago - Arrival Time: 9:00 am
                          </div>
                        </div>
                        <div class="margin-neg row fc2-details-info">
                          <br/>
                          <div class="col-xs-6">
                            1 adult & 2 children<div class="fc2_people"></div><br/>
                            <strong>256€</strong> - Tarif XX
                          </div>
                          <div class="col-xs-6">
                            Booking Channel: <strong>GDS</strong><br/>
                            Nights : <strong>5</strong><br/>
                            Room type:<strong>Classic</strong><br/>
                            Group: <strong>Yes</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="margin-neg row">
                      <div class="col-xs-12">
                        <div class="media">
                          <div class="media-left media-middle">
                            <div class="fc2_hotel_logo fc2_ibis"></div>
                          </div>
                          <div class="media-body">
                            <div class="fc2_stay_type fc2_work"></div><strong class="fc2_main">10/01/2015 Velizy Villacoublay</strong>, République Dominicaine<br/>
                          </div>
                        </div>
                        <div class="margin-neg row fc2-details-info">
                          <br/>
                          <div class="col-xs-6">
                            Points Earned : <strong>2000 pts</strong><br/>
                            1 adult<div class="fc2_alone"></div><br/>
                            <strong>256€</strong> - Tarif XX
                          </div>
                          <div class="col-xs-6">
                            Booking Channel: <strong>AccorHotels.com</strong><br/>
                            Nights : <strong>7</strong><br/>
                            Room type:<strong>Classic</strong><br/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="margin-neg row">
                      <div class="col-xs-12">
                        <div class="media">
                          <div class="media-left media-middle">
                            <div class="fc2_hotel_logo fc2_nobrand"></div>
                          </div>
                          <div class="media-body">
                            <div class="fc2_stay_type fc2_work"></div><strong class="fc2_main">01/06/2016- Madrid</strong>, Spain<br/>
                          </div>
                        </div>
                        <div class="margin-neg row fc2-details-info">
                          <br/>
                          <div class="col-xs-6">
                            Points Earned : <strong>2000 pts</strong><br/>
                            1 adult<div class="fc2_alone"></div><br/>
                            <strong>256€</strong> - Tarif XX
                          </div>
                          <div class="col-xs-6">
                            Booking Channel: <strong>GDS</strong><br/>
                            Nights : <strong>7</strong><br/>
                            Room type:<strong>Classic</strong><br/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item fc2_cancelled">
                    <div class="margin-neg row">
                      <div class="col-xs-12">
                        <div class="media">
                          <div class="media-left media-middle">
                            <div class="fc2_hotel_logo fc2_ibis_cancelled"></div>
                          </div>
                          <div class="media-body">
                            <div class="fc2_stay_type fc2_leisure"></div><strong class="fc2_main">10/15/2015- Paris</strong>, France<br/>
                            Canceled
                          </div>
                        </div>
                        <div class="margin-neg row fc2-details-info">
                          <br/>
                          <div class="col-xs-6">
                            No Points Earned<br/>
                          </div>
                          <div class="col-xs-6">
                            Booking Channel: <strong>GDS</strong><br/>
                            Nights : <strong>11</strong><br/>
                            Room type:<strong>Classic</strong><br/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="margin-neg row">
                      <div class="col-xs-12">
                        <div class="media">
                          <div class="media-left media-middle">
                            <div class="fc2_hotel_logo fc2_novotel"></div>
                          </div>
                          <div class="media-body">
                            <div class="fc2_stay_type fc2_work"></div><strong class="fc2_main">06/12/2015- Paris</strong>, France<br/>
                            Booked
                          </div>
                        </div>
                        <div class="margin-neg row fc2-details-info">
                          <br/>
                          <div class="col-xs-6">
                            Points Earned : <strong>2000 pts</strong><br/>
                          </div>
                          <div class="col-xs-6">
                            Booking Channel: <strong>GDS</strong><br/>
                            Nights : <strong>7</strong><br/>
                            Room type:<strong>Classic</strong><br/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item fc2_cancelled">
                    <div class="margin-neg row">
                      <div class="col-xs-12">
                        <div class="media">
                          <div class="media-left media-middle">
                            <div class="fc2_hotel_logo fc2_nobrand_cancelled"></div>
                          </div>
                          <div class="media-body">
                            <div class="fc2_stay_type fc2_work"></div><strong class="fc2_main">14/01/2015- Paris</strong>, France<br/>
                            Booked
                          </div>
                        </div>
                        <div class="margin-neg row fc2-details-info">
                          <br/>
                          <div class="col-xs-6">
                            No Points Earned<br/>
                          </div>
                          <div class="col-xs-6">
                            Booking Channel: <strong>GDS</strong><br/>
                            Nights : <strong>7</strong><br/>
                            Room type:<strong>Classic</strong><br/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>


                <div class="table-wrapper hide">
                  <table class="fc2_stay_details" cellspacing="0px" cellpadding="0px">
                    <tr class="fc2_last_stay">
                      <td><div class="fc2_hotel_logo fc2_novotel"></div></td>
                      <td>
                        <div class="fc2_stay_type fc2_work"></div>
                        <strong class="fc2_main">Stay at this hotel</strong> 12/14/15 to 12/19/15<br />
                        Booked 4 days ago - Arrival Time: 9:00 am<br/>
                        <strong>256€</strong> - Tarif XX
                      </td>
                      <td>
                        Nights:<strong>5</strong><br />
                        Room type:<strong>Classic</strong><br/>
                        Points Earned : <strong>2000 pts</strong>
                      </td>
                      <td>
                        Booking Channel: <strong>GDS</strong><br />
                        1 adult & 2 children<div class="fc2_people"></div><br/>
                        Group: <strong>Yes</strong>
                      </td>
                    </tr>
                    <tr>
                      <td><div class="fc2_hotel_logo fc2_ibis"></div></td>
                      <td>
                        <div class="fc2_stay_type fc2_work"></div>
                        <strong class="fc2_main">01/09/2016 - Velizy Villacoublay</strong>, République Dominicaine<br />
                        Booked 1 day ago<br/>
                        Tarif XX
                      </td>
                      <td>
                        Nights: <strong>7</strong><br />
                        Room type: <strong>Classic</strong><br/>
                        Points Earned : <strong>2000 pts</strong>
                      </td>
                      <td>
                        Booking Channel: <strong>AccorHotels.com</strong><br/>
                        1 adult<div class="fc2_alone"></div>
                      </td>
                    </tr>
                    <tr>
                      <td><div class="fc2_hotel_logo fc2_nobrand"></div></td>
                      <td>
                        <div class="fc2_stay_type fc2_work"></div>
                        <strong class="fc2_main">07/06/2016 - Madrid</strong>, Spain<br />
                        Booked 6 days ago<br/>
                        <strong>256€</strong> - Tarif XX
                      </td>
                      <td>
                        Nights: <strong>7</strong><br />
                        Room type: <strong>Classic</strong><br/>
                        Points Earned : <strong>2000 pts</strong>
                      </td>
                      <td>Booking Channel: <strong>GDS</strong></td>
                    </tr>
                    <tr class="fc2_cancelled">
                      <td><div class="fc2_hotel_logo fc2_ibis_cancelled"></div></td>
                      <td>
                        <div class="fc2_stay_type fc2_leisure"></div>
                        <strong class="fc2_main">01/06/2015 - Paris</strong>, France<br />
                        Canceled
                      </td>
                      <td>
                        Nights: <strong>11</strong><br />
                        Room type: <strong>Classic</strong>
                      </td>
                      <td>Booking Channel: <strong>GDS</strong></td>
                    </tr>
                    <tr>
                      <td><div class="fc2_hotel_logo fc2_novotel"></div></td>
                      <td>
                        <div class="fc2_stay_type fc2_work"></div>
                        <strong class="fc2_main">14/01/2015 - Paris</strong>, France<br />
                        Booked
                      </td>
                      <td>
                        Nights: <strong>7</strong><br />
                        Room type: <strong>Classic</strong><br/>
                        Points Earned : <strong>2000 pts</strong>
                      </td>
                      <td>Booking Channel: <strong>GDS</strong></td>
                    </tr>
                    <tr class="fc2_cancelled">
                      <td><div class="fc2_hotel_logo fc2_nobrand_cancelled"></div></td>
                      <td>
                        <div class="fc2_stay_type fc2_work"></div>
                        <strong class="fc2_main">14/01/2015 - Paris</strong>, France<br />
                        No show
                      </td>
                      <td>
                        Nights: <strong>7</strong><br />
                        Room type: <strong>Classic</strong>
                      </td>
                      <td>Booking Channel:<strong>GDS</strong></td>
                    </tr>
                  </table>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>

          </div>

        </div>

      </div>


      <div class="modal fade" id="fc2_subscription_modal" tabindex="-1" role="dialog" aria-labelledby="Subscription">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Subscription</h4>
            </div>
            <div class="modal-body">
              <form class="form-horizontal">

                <div class="fc2_subscription_header">
                  <div class="fc2_subscritption_header_checkbox">
                    <div class="radio">
                      <label for="fc2_prof">
                        <input type="radio" disabled="disabled" value="" name="radio-sub" id="fc2_prof">
                        Professional
                      </label>
                    </div>
                    <div class="radio">
                      <label for="fc2_pers">
                        <input type="radio" disabled="disabled" value="" name="radio-sub" id="fc2_pers">
                        Personnal
                      </label>
                    </div>
                  </div>

                  <div  class="fc2_subscritption_header_label">
                    <span class="glyphicon glyphicon-phone"></span> 0682551407<br />
                    <span class="glyphicon glyphicon-envelope"></span> mlsoupalognonno...
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_partner">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_partner">
                        Partner Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_pullman">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_pullman">
                        Pullman Newsletter
                      </label>
                    </div>
                  </div>


                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_thalasso">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_thalasso">
                        Accor Thalasso.com Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_meeting">
                        <input type="checkbox" checked="checked" disabled="disabled" value="" id="fc2_meeting">
                        MeetingatAccorHotels.com E Newsletter
                      </label>
                    </div>
                  </div>


                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_accor">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_accor">
                        AccorHotels Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_leisure">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_leisure">
                        Leisure professionnals E Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_mgallery">
                        <input type="checkbox" checked="checked" disabled="disabled" value="" id="fc2_mgallery">
                        MGallery Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_adagio">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_adagio">
                        Adagio Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_sofitel">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_sofitel">
                        Sofitel Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_club">
                        <input type="checkbox" checked="checked" disabled="disabled" value="" id="fc2_club">
                        Le Club AccorHotels Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_mercure">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_mercure">
                        Mercure Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_advantage">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_advantage">
                        Accor Advantage Plus Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="commfc2_">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_comm">
                        E-communication Accor Privileged Partners
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_hotelf1">
                        <input type="checkbox" checked="checked" disabled="disabled" value="" id="fc2_hotelf1">
                        HotelF1 Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="business">
                        <input type="checkbox" disabled="disabled" value="" id="business">
                        Business traveler E Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_accorhotels">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_accorhotels">
                        AccorHotels.com Text messages <i class=" fa fa-mobile fa-lg"></i>
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_travel">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_travel">
                        Travel agencies E Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_clubtext">
                        <input type="checkbox" disabled="disabled" checked="checked" value="" id="fc2_clubtext">
                        Le club AccorHotels Text messages <i class=" fa fa-mobile fa-lg"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- <div class="form-group">
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_partner">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_partner">
                        Partner Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_pullman">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_pullman">
                        Pullman Newsletter
                      </label>
                    </div>
                  </div>


                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_thalasso">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_thalasso">
                        Accor Thalasso.com Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_meeting">
                        <input type="checkbox" checked="checked" disabled="disabled" value="" id="fc2_meeting">
                        Meetingataccorhotels.com E-news
                      </label>
                    </div>
                  </div>


                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_accor">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_accor">
                        Accorhotels Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_leisure">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_leisure">
                        Leisure professionnals E-news
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_mgallery">
                        <input type="checkbox" checked="checked" disabled="disabled" value="" id="fc2_mgallery">
                        MGallery Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_adagio">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_adagio">
                        Adagio Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_sofitel">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_sofitel">
                        Sofitel Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_club">
                        <input type="checkbox" checked="checked" disabled="disabled" value="" id="fc2_club">
                        Le Club Accor Hotel Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_mercure">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_mercure">
                        Mercure Newsletter
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_advantage">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_advantage">
                        Accor Advantage Plus Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="commfc2_">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_comm">
                        E-communication Accor Privileged Partners
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_hotelf1">
                        <input type="checkbox" checked="checked" disabled="disabled" value="" id="fc2_hotelf1">
                        HotelF1 Newsletter
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="business">
                        <input type="checkbox" disabled="disabled" value="" id="business">
                        Business traveler E news
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_accorhotels">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_accorhotels">
                        AccorHotels.com Text messages
                      </label>
                    </div>
                  </div>

                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_travel">
                        <input type="checkbox" disabled="disabled" value="" id="fc2_travel">
                        Travel agencies E new
                      </label>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="checkbox">
                      <label for="fc2_clubtext">
                        <input type="checkbox" disabled="disabled" checked="checked" value="" id="fc2_clubtext">
                        Le club AccorHotels Text messages
                      </label>
                    </div>
                  </div>
                </div> -->
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" data-dismiss="modal" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="fc2_todotosay_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">To Do To Say</h4>
            </div>
            <div class="modal-body">
              <div class="fc2_todo">
                <span class="label label-primary">#HappyBirthday&nbsp;<a href="#"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></span>
                <span class="label label-primary">#SoftBenefits&nbsp;<a href="#"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></span>
              </div>
              <div class="fc2_tosay">
                <span class="label label-info">#BabyCribOk</span>
                <span class="label label-info">#BottleChampagneKO</span>
              </div>
              <br /><br />
              <form class="form-inline">
                <div class="form-group">
                  <div class="input-group">
                    <input type="text" class="form-control">
                    <div class="input-group-addon"><em><a href="#">Add</a></em></div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade modal-email" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Email</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-bind:value="client.email" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade modal-add-preference" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Add new preference</h4>
            </div>
            <div class="modal-body">
              <div class="wrapper-search">
                <input type="text" placeholder="Add a new preference" class="search-satis form-control"/>
                <i class="fa fa-search"></i>
              </div>
              <div>
                <br/>
                <div class="pref-add-fav"><i class="js-star fa fa-star-o fa-lg"></i> Add to favorite :<span><input type="checkbox" name="radio-add-pref"> All</span> <span><input type="checkbox" name="radio-add-pref"> In my hotel</span></div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Add</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade modal-add-comment" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Add a comment</h4>
            </div>
            <div class="modal-body">
              <div class="wrapper-search">
                <textarea type="text" placeholder="Add a comment (max: 200char)" class="form-control"/></textarea>
              </div>
              <div>
                <br/>
                <div class="pref-add-fav"><i class="fa fa-star"></i> Add to favorite :<span><input type="radio" name="radio-add-pref"> All</span> <span><input type="radio" name="radio-add-pref"> In my hotel</span></div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary js-save-edit-comment" data-dismiss="modal">Add</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade modal-smoking" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Smoking - Room</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-xs-offset-2 col-xs-4 text-center">
                  <div class="choice-pref choice-pref-active">
                    Smoking Room
                  </div>
                </div>
                <div class="col-xs-4 text-center">
                  <div class="choice-pref">
                    Non-Smoking Room
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-offset-2 col-xs-8">
                  <br/>
                  <div class="pref-add-fav"><i class="fa js-star fa fa-star-o fa-lg"></i> Add to favorite : <span><input type="checkbox" name="radio-fav" /> All</span> <span><input name="checkbox" type="checkbox" /> In my hotel</span></div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-link" data-dismiss="modal"><i class="fa fa-trash"></i> Delete</button>

              <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modal-subscriptions" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Subscriptions</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-xs-5">
                  <div class="fc2_subscriptionsPrimary">
                    <div class="fc2_inputItem">
                      <div class="col-xs-2">
                        <label for="tel">Tel :</label>
                      </div>
                      <div class="col-xs-10">
                        <div class="fc2_styledSelect">
                          <select name="tel" id="">
                            <option value="">0675849301</option>
                            <option value="">0786554922</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="fc2_inputItem">
                      <div class="col-xs-2">
                        <label for="mail">Mail :</label>
                      </div>
                      <div class="col-xs-10">
                        <div class="fc2_styledSelect">
                          <select name="mail" id="">
                            <option value="">f.vairet@gmail.com</option>
                            <option value="">f.vairet@club-internet.fr</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6">
                  <div class="fc2_subs_settings">
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-1"/>
                      <label for="set-1">Partner Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-2"/>
                      <label for="set-2">Accor Thalasso.com Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-3"/>
                      <label for="set-3">Accorhotels Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-4"/>
                      <label for="set-4">MGallery Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-5" checked/>
                      <label for="set-5">Sofitel Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-6"/>
                      <label for="set-6">Mercure Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-7"/>
                      <label for="set-7">E-communication Accor Privileged Partners</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-8"/>
                      <label for="set-8">Business traveler E news</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-9"/>
                      <label for="set-9">Traveler agencies E new</label>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="fc2_subs_settings">
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-10"/>
                      <label for="set-10">Pullman Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-11"/>
                      <label for="set-11">Meetingaccorhotels.com E-news</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-12"/>
                      <label for="set-12">Leiure professionals E-news</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-13"/>
                      <label for="set-13">Adagio Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-14" checked/>
                      <label for="set-14">Le Club Accor Hotel Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-15"/>
                      <label for="set-15">Accor Advantage Hotel Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-16"/>
                      <label for="set-16">Hotel F1 Newsletter</label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-17"/>
                      <label for="set-17">AccorHotels.com Text messages <i class="fa fa-iphone pull-right"></i></label>
                    </div>
                    <div class="fc2_setting_input">
                      <input type="checkbox" name="set-18"/>
                      <label for="set-18">Le Club AccotHotels text messages <i class="fa fa-iphone pull-right"></i></label>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>



    </div>
  </div>




</template>

<!-- JS -->
<script>

    // Imports needed libraries
    import jQuery from "../../assets/js/jquery.js"
    import bootStrap from "../../assets/js/bootstrap.min.js"
    import fcNew from "../../assets/js/fc-new.js"
    import axios from 'axios'
    import jsonp from 'jsonp'
    import Chart from 'chart.js'
    export default {
        name: 'client',
        data () {
            return {
                client: null,
                firstname:null,
                lastname:null,
                email:null,
                twitter:null,
                isActive:null,
                clientseniority: null,
                clientduration: null,
                clientfrequency: null,
                influenceChartScore: null,
                behaviorChartScore: null,
                potentialChartScore: null,
                frequency: '12',
                duration: '1',
                seniority: '3',
                isActiveClass: true,
                myBehaviorArray: [
                    'Turn off air conditionner',
                    'Pregnant wife : next to elevator',
                    'If childs : connecting room'
                ],
                myInfluenceArray: [
                    'Give room with a good view',
                    'Mention the # of the hotel',
                    'Common relation in the hotel'
                ],
                myPotentialArray: [
                    'Free Meal',
                ],
                userId: null,
                formError: null,
                topics: null,
                behaviorscore:null,
                potentialscore:null,
                clientroomtype:null,
                clientfood:null,
                clientextras:null
            }
        },

        created () {
            this.getClient()
            this.getTwitterAccount()
            this.getClientSeniority()
            this.getClientDuration()
            this.getClientFrequency ()
            this.behaviorScore()
            this.potentialScore()
            this.getClientRoomType()
            this.getClientFood()
            this.getClientExtras()


        },

        methods: {

            getClient () {
                // Requests API
                axios.get(`/client/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.client = response.data[0]
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            getClientSeniority () {
                // Requests API
                var seniorityScore;
                axios.get(`/clientseniority/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.clientseniority = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })


            },
            getClientDuration () {
                // Requests API
                axios.get(`/clientduration/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.clientduration = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            getClientFrequency () {
                // Requests API
                axios.get(`/clientfrequency/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.clientfrequency = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })

            },

            behaviorScore(){
                axios.get(`/behaviorvalue/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.behaviorscore = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })

            },

            // Potential
            potentialScore(){
                axios.get(`/potentialvalue/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.potentialscore = response.data
                        console.log(this.potentialscore)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            getClientRoomType () {
                // Requests API
                axios.get(`/clientroomtype/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.clientroomtype = response.data

                    })
                    .catch(function (error) {
                        console.log(error)
                    })

            },
            getClientFood () {
                // Requests API
                axios.get(`/clientfood/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.clientfood = response.data

                    })
                    .catch(function (error) {
                        console.log(error)
                    })

            },
            getClientExtras () {
                // Requests API
                axios.get(`/clientextras/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.clientextras = response.data

                    })
                    .catch(function (error) {
                        console.log(error)
                    })

            },

            showPropositionInf(){
                var myArray = this.myInfluenceArray;
                var rand = myArray[Math.floor(Math.random() * myArray.length)];
                document.getElementById('influenceProposition').innerHTML = rand;
            },
            showPropositionBeh(){
                var myArray = this.myBehaviorArray;
                var rand = myArray[Math.floor(Math.random() * myArray.length)];
                document.getElementById('behaviorProposition').innerHTML = rand;
            },
            showPropositionPot(){
                var myArray = this.myPotentialArray;
                var rand = myArray[Math.floor(Math.random() * myArray.length)];
                document.getElementById('potentialProposition').innerHTML = rand;
            },
            activateClass(){
                if(document.getElementById("iconCollapse").classList.contains('fa-arrow-down')) {
                    document.getElementById("iconCollapse").classList.remove('fa-arrow-down');
                    document.getElementById("iconCollapse").classList.add('fa-arrow-up');
                }
                else {
                    document.getElementById("iconCollapse").classList.remove('fa-arrow-up');
                    document.getElementById("iconCollapse").classList.add('fa-arrow-down');
                }
            },
            getTwitterAccount(){
                //Klout Twitter Username get from DB
                axios.get(`/twitteraccount/${this.$route.params.clientId}`)
                    .then((response) => {
                        this.twitter = response.data
                        this.tw = localStorage.setItem("twitter", this.twitter)
                        //Klout Twitter Username get ID
                        new Promise((resolve, reject) => {
                            jsonp('http://api.klout.com/v2/identity.json/twitter?screenName=' + this.twitter + '&key=vu5b7qjhvffbuy9ku9crhqjc', null, function (err, response) {
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(response)
                                }
                            })
                        }).then((response) => {
                            this.userId = response.id
                        })
                    })

            },


            createChart(canvasId, score) {
                var pieData = {
                    datasets: [{
                        data: [score, 100 - score],
                        backgroundColor: [
                            "#F7CB6C",
                            "#FFFFFF"
                        ],
                        borderColor: [
                            "#F7CB6C",
                            "#FFFFFF"
                        ]
                    }]
                };

                var myPie = new Chart(canvasId, {
                    type: 'doughnut',
                    data: pieData,
                    options: {
                        tooltips: {enabled: false}, // cacher le hover
                        hover: {mode: null}, // cacher le hover
                        title: {display: false}, // cacher le titre
                    },
                });
            },

            createChart2(canvasId, score) {
                var dataBehavior = {
                    datasets: [{
                        data: [score, 100 - score],
                        backgroundColor: [
                            "#649BDD",
                            "#FFFFFF"
                        ],
                        borderColor: [
                            "#649BDD",
                            "#FFFFFF"
                        ]
                    }]
                };

                var myPieBehavior = new Chart(canvasId, {
                    type: 'doughnut',
                    data: dataBehavior,
                    options: {
                        tooltips: {enabled: false}, // cacher le hover
                        hover: {mode: null}, // cacher le hover
                        title: {display: false}, // cacher le titre
                    },
                });
            },
            createChart3(canvasId, score) {
                var dataPotential = {
                    datasets: [{
                        data: [score, 100 - score],
                        backgroundColor: [
                            "#B5D861",
                            "#FFFFFF"
                        ],
                        borderColor: [
                            "#B5D861",
                            "#FFFFFF"
                        ]
                    }]
                };

                var myPiePotential = new Chart(canvasId, {
                    type: 'doughnut',
                    data: dataPotential,
                    options: {
                        tooltips: {enabled: false}, // cacher le hover
                        hover: {mode: null}, // cacher le hover
                        title: {display: false}, // cacher le titre
                    },
                });
            },

        },
        watch: {

            userId(){
                // On créé une promise pour pouvoir éxecuter une fonction après que l'appel soit terminé
                new Promise((resolve, reject) => {
                    // URL VALIDE POUR L'APPEL JSONP http://api.klout.com/v2/identity.json/twitter?screenName=AbdelhamidHenni?key=vu5b7qjhvffbuy9ku9crhqjc:
                    // ID ABDELHAMID : 12103428766356800
                    jsonp('http://api.klout.com/v2/user.json/'+this.userId+'?key=vu5b7qjhvffbuy9ku9crhqjc', null, function (err, response) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(response)
                        }
                    })
                }).then((response) => {
                    this.data = response
                    this.influenceChartScore = response.score.score
                    this.behaviorChartScore = this.behaviorscore
                    this.potentialChartScore = this.potentialscore


                    this.createChart('influenceChart', this.influenceChartScore)
                    this.createChart2('behaviorChart', this.behaviorChartScore)
                    this.createChart3('potentialChart', this.potentialChartScore)
                }).then((response) => {
                    // on get les topics
                    new Promise((resolve, reject) => {
                        jsonp('http://api.klout.com/v2/user.json/'+this.userId+'/topics?key=vu5b7qjhvffbuy9ku9crhqjc', null, function (err, response) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(response)
                            }
                        })
                    }).then((response) => {
                        this.topics = response
                    })
                })
            },
        }

    }
</script>

