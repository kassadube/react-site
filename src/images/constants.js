/*
TODO:
1. synchronize files & constants names
2. delete duplicates (check in components)
*/

// login-section:
import POINTERLOGO from './login/pointer_logo.png';

import MOBILEAPPS from './login/mobile_apps.svg';

export const POINTER_LOGO = POINTERLOGO;
export const MOBILE_APPS = MOBILEAPPS;
/*export WHITE_DOWN_ARROW from 'images/login/white_down_arrow.svg';

export ALERTS_DISABLE from 'images/alerts.svg';
export ALERTS_ACTIVE from 'images/alerts_active.svg';
export AXE from 'images/axe.svg';
export AXE_WHITE from 'images/axe_white.svg';
export CB_ARROW from 'images/cb_arrow.png';
// export FILTER from 'images/filter.svg';
export MESSAGES from 'images/messages.svg';
export REPORT_SMALL from 'images/report_small.svg';
export HIGH_SEVERITY from 'images/high_sevirity.png';
export IMG_LOGO from 'images/img_logo.png';
export IMG_TWITTER_BOOTSTRAP from 'images/img_twitter_bootstrap.png';
export LOW_SEVERITY from 'images/low_sevirity.png';
export MEDIUM_SEVERITY from 'images/medium_sevirity.png';
export SELECTED_TRIANGLE from 'images/selected_triangle.png';


// fleet-map
export EMPTY_STATE from 'images/fleet-map/empty_state.svg';
export CURTAIN_EMPTY_STATE from 'images/fleet-map/curtain_empty_state.svg';


// fleet-map/card_imgs
export CAR_ICON from 'images/fleet-map/card_imgs/car.svg';
export BATTERY from 'images/fleet-map/card_imgs/battery.svg';
export DRIVER from 'images/fleet-map/card_imgs/driver.svg';
export LICENSE_PLATE from 'images/fleet-map/card_imgs/license_plate.svg';
export FLEET_NUMBER from 'images/fleet-map/card_imgs/fleet_number.svg';
export ALIAS from 'images/fleet-map/card_imgs/fleet_number.svg'; // TODO: duplicate remove
export SPEED from 'images/fleet-map/card_imgs/speed.svg';
export ROW_REFERENCE_TIME from 'images/fleet-map/card_imgs/last_msg_rec.svg';
export GPS_DATA_TIME from 'images/fleet-map/card_imgs/last_loc.svg';
export ODOMETER from 'images/fleet-map/card_imgs/odometer.svg';
export HOUR_METER from 'images/fleet-map/card_imgs/hourmeter.svg';
export FUEL_LEVEL from 'images/fleet-map/card_imgs/fuel.svg';
export NEW_MESSAGE from 'images/fleet-map/card_imgs/new_message.svg';
export MENU_ICON from 'images/fleet-map/card_imgs/menu_map.svg';
export TRUCK_ICON from 'images/fleet-map/card_imgs/truck.svg';
export DRIVING from 'images/fleet-map/card_imgs/driving_moving.svg';
export GARAGE from 'images/fleet-map/card_imgs/garage.svg';
export PARKING from 'images/fleet-map/card_imgs/parking_icon.svg';
export IDLING from 'images/fleet-map/card_imgs/idling.svg';
export KEY from 'images/fleet-map/card_imgs/key.svg';
export RECTANGLE from 'images/fleet-map/card_imgs/rectangle.svg';
export STOP from 'images/fleet-map/card_imgs/stop.svg';
export MESSAGE from 'images/fleet-map/card_imgs/message.svg';
export WHITE_CIRCLE from 'images/fleet-map/card_imgs/white_circle.svg';


// fleet-map/icons
export POINT from 'images/fleet-map/icons/point.svg';
export NULL_IMAGE from 'images/fleet-map/icons/point.svg'; // TODO: duplicate remove
export MAP_LOCATION from 'images/fleet-map/icons/map-loaction.svg';
export ALERT from 'images/fleet-map/icons/alert.svg';
export TRANSMISSION from 'images/fleet-map/icons/transmission.svg';
export MAP_LOCATION_A from 'images/fleet-map/icons/map-location-A.svg';
export MAP_LOCATION_B from 'images/fleet-map/icons/map-location-B.svg';
export FEEDBACK from 'images/fleet-map/icons/feedback.svg';
export PLAY from 'images/fleet-map/icons/play.svg';
export PAUSE from 'images/fleet-map/icons/pause.svg';
export MOVE_PREV_POINT from 'images/fleet-map/icons/move_previous_point.svg';
export MOVE_NEXT_POINT from 'images/fleet-map/icons/move_next_point.svg';
export MOVE_PREV_TRIP from 'images/fleet-map/icons/move_previous_trip.svg';
export MOVE_NEXT_TRIP from 'images/fleet-map/icons/move_next_trip.svg';
export MOVE_PREV_POINT_GREY from 'images/fleet-map/icons/move_previous_point_grey.svg';
export MOVE_NEXT_POINT_GREY from 'images/fleet-map/icons/move_next_point_grey.svg';
export MOVE_PREV_TRIP_GREY from 'images/fleet-map/icons/move_previous_trip_grey.svg';
export MOVE_NEXT_TRIP_GREY from 'images/fleet-map/icons/move_next_trip_grey.svg';
export DOTS from 'images/fleet-map/icons/dots.svg';
export DOTS_ACTIVE from 'images/fleet-map/icons/dots_active.svg';
export DOTS_HOVER from 'images/fleet-map/icons/dots_hover.svg';
export V from 'images/fleet-map/icons/V.svg';
export X from 'images/fleet-map/icons/X.svg';
export SETTING from 'images/fleet-map/icons/settings.svg';
export CAR from 'images/fleet-map/icons/car.svg';
export DELETE from 'images/fleet-map/icons/delete.svg';
export DIRECTIONS from 'images/fleet-map/icons/directions.svg';
export BLUE_EYE from 'images/fleet-map/icons/blue_eye.svg';
export GREY_EYE from 'images/fleet-map/icons/grey_eye.svg';
export EYE_ACTIVE from 'images/fleet-map/icons/eye_active.svg';
export LAYERS from 'images/fleet-map/icons/layers.svg';
export LAYERS_ACTIVE from 'images/fleet-map/icons/layers_active.svg';
export LAYERS_HOVER from 'images/fleet-map/icons/layers_hover.svg';
export SEARCH from 'images/fleet-map/icons/search.svg';
export SEARCH_HOVER from 'images/fleet-map/icons/search_hover.svg';
export SEARCH_BLUE from 'images/fleet-map/icons/search_blue.svg';
export UPLOAD from 'images/fleet-map/icons/upload.svg';
export UPLOAD_GREY from 'images/fleet-map/icons/upload_grey.svg';
export LOW_WARNING from 'images/fleet-map/icons/low_warning.svg';
export MEDIUM_WARNING from 'images/fleet-map/icons/medium_warning.svg';
export HIGH_WARNING from 'images/fleet-map/icons/high_warning.svg';
export TRASH from 'images/fleet-map/icons/trash.svg';

// fleet-map/list_imgs
export VERTICAL_LINE from 'images/fleet-map/list_imgs/vertical_line.svg';
export INFO from 'images/fleet-map/list_imgs/info.svg';
export INFO_HOVER from 'images/fleet-map/list_imgs/info_hover.svg';
export BATTERY_VERTICAL from 'images/fleet-map/list_imgs/battery_vertical.svg';
export LAST_UPDATE from 'images/fleet-map/list_imgs/updated.svg';
export TEMPERATURE from 'images/fleet-map/list_imgs/temperature.svg';
export BATTERY_LOW from 'images/fleet-map/list_imgs/battery_low.svg';
export BATTERY_MEDIUM from 'images/fleet-map/list_imgs/battery_medium.svg';
export BATTERY_HIGH from 'images/fleet-map/list_imgs/battery_high.svg';
export HUMIDITY_SENSOR from 'images/fleet-map/list_imgs/humidity_sensor.svg';
export LIGHT_SENSOR from 'images/fleet-map/list_imgs/light_sensor.svg';
export MAGNETIC from 'images/fleet-map/list_imgs/magnetic.svg';
export NO_MAGNETIC from 'images/fleet-map/list_imgs/no_magnetic.svg';
export RECEPTION from 'images/fleet-map/list_imgs/broadcast.svg';
export NO_RECEPTION from 'images/fleet-map/list_imgs/no_communication.svg';
export STOP_LAMP from 'images/fleet-map/list_imgs/red_stop_lamp.svg';
export WARNING_LAMP from 'images/fleet-map/list_imgs/amber_warning_lamp.svg';
export PROTECTED_LAMP from 'images/fleet-map/list_imgs/protected_lamp.svg';
export MALFUNCTION_LAMP from 'images/fleet-map/list_imgs/Malfunction_Indication_Lamp.svg';
export GAUGE_BAND from 'images/fleet-map/list_imgs/gauge_band.svg';
export GAUGE_RED_BAND from 'images/fleet-map/list_imgs/gauge_red_band.svg';
export EXPAND_CARDS from 'images/fleet-map/list_imgs/expand_cards.svg';
export EXPAND_CARDS_BLUE from 'images/fleet-map/list_imgs/expand_cards_blue.svg';
export EXPAND_CARDS_HOVER from 'images/fleet-map/list_imgs/expand_cards_hover.svg';
export EYE from 'images/fleet-map/list_imgs/eye.svg';
export EYE_HOVER from 'images/fleet-map/list_imgs/eye_hover.svg';
export EYE_LINED from 'images/fleet-map/list_imgs/eye_lined.svg';
export EYE_LINED_HOVER from 'images/fleet-map/list_imgs/eye_lined_hover.svg';
export FILTER from 'images/fleet-map/list_imgs/filter.svg';
export FILTER_ACTIVE from 'images/fleet-map/list_imgs/filter_active.svg';
export FILTER_HOVER from 'images/fleet-map/list_imgs/filter_hover.svg';
export MENU_ACTIVE from 'images/fleet-map/list_imgs/menu_active.svg';
export MENU_UNACTIVE from 'images/fleet-map/list_imgs/menu_unactive.svg';
export MINIMIZED_CARDS from 'images/fleet-map/list_imgs/minimize_cards.svg';
export MINIMIZED_CARDS_HOVER from 'images/fleet-map/list_imgs/minimize_cards_hover.svg';
export SEND_MESSAGE from 'images/fleet-map/list_imgs/send_message.svg';
export SORT from 'images/fleet-map/list_imgs/sort.svg';
export SORT_ACTIVE from 'images/fleet-map/list_imgs/sort_active.svg';
export SORT_HOVER from 'images/fleet-map/list_imgs/sort_hover.svg';
export SPACE from 'images/fleet-map/list_imgs/space.svg';

// fleet-map/map_side_menu
// export CAR from 'images/fleet-map/map_side_menu/car.svg';
export CAR_ACTIVE from 'images/fleet-map/map_side_menu/car_active.svg';
export EXPAND from 'images/fleet-map/map_side_menu/expand.svg';
export EXPAND_HOVER from 'images/fleet-map/map_side_menu/expand_hover.svg';
export GEO_FENCE_LAYER from 'images/fleet-map/map_side_menu/geo_fence_layer.svg';
export GEO_FENCE_LAYER_ACTIVE from 'images/fleet-map/map_side_menu/geo_fence_layer_active.svg';
export GEO_FENCE_LAYER_HOVER from 'images/fleet-map/map_side_menu/geo_fence_layer_hover.svg';
export GEOFENCE from 'images/fleet-map/map_side_menu/geofence.svg';
export GEOFENCE_HOVER from 'images/fleet-map/map_side_menu/geofence_hover.svg';
export HEXAGON from 'images/fleet-map/map_side_menu/hexagon.svg';
export HEXAGON_ACTIVE from 'images/fleet-map/map_side_menu/hexagon_active.svg';
export BLUE_LICENSE_PLATE from 'images/fleet-map/map_side_menu/blue_license_plate.svg';
export LICENSE_PLATE_ACTIVE from 'images/fleet-map/map_side_menu/license_plate_active.svg';
export LICENSE_PLATE_HOVER from 'images/fleet-map/map_side_menu/license_plate_hover.svg';
export POI from 'images/fleet-map/map_side_menu/poi.svg';
export POI_ACTIVE from 'images/fleet-map/map_side_menu/poi_active.svg';
export POI_HOVER from 'images/fleet-map/map_side_menu/poi_hover.svg';
export PRINT from 'images/fleet-map/map_side_menu/print.svg';
export PRINT_HOVER from 'images/fleet-map/map_side_menu/print_hover.svg';
export RULER from 'images/fleet-map/map_side_menu/ruler.svg';
export RULER_HOVER from 'images/fleet-map/map_side_menu/ruler_hover.svg';
export VEHICLE_TRACE from 'images/fleet-map/map_side_menu/vehicle_trace.svg';
export VEHICLE_TRACE_ACTIVE from 'images/fleet-map/map_side_menu/vehicle_trace_active.svg';
export VEHICLE_TRACE_HOVER from 'images/fleet-map/map_side_menu/vehicle_trace_hover.svg';
export ZOOM_IN from 'images/fleet-map/map_side_menu/zoom_in.svg';
export ZOOM_IN_HOVER from 'images/fleet-map/map_side_menu/zoom_in_hover.svg';

// fleet-map/route_search
export SWAP from 'images/fleet-map/route_search/swap.svg';
export BACK from 'images/fleet-map/route_search/back.svg';
export LOCATION from 'images/fleet-map/route_search/location.svg';
export LOCATION_WHITE from 'images/fleet-map/route_search/location_white.svg';
export HOLLOW_DOT from 'images/fleet-map/route_search/hollow_dot.svg';
export WHITE_DOTS from 'images/fleet-map/route_search/white_dot.svg';
export DOWN_ARROW from 'images/fleet-map/route_search/down_arrow.svg';
export ADD from 'images/fleet-map/route_search/add.svg';
export DUPLICATES from 'images/fleet-map/route_search/duplicates.svg';
export DUPLICATES_BLUE from 'images/fleet-map/route_search/duplicates_blue.svg';
// export PRINT from 'images/fleet-map/route_search/print.svg';

*/