const OpenJTalk = require('openjtalk')
const mei = new OpenJTalk({
  htsvoice        : './voice/kazane.htsvoice',
  dic             : './dic/open_jtalk_dic_utf_8-1.08',
  sampling_rate   : 48000,
  pitch           : 200,
  audio_buff_size : 48000,
  alpha           : 0.5,
  beta            : 0.8,
  uv_threshold    : 0.5,
  gv_weight_mgc   : 1.0,
  gv_weight_lf0   : 1.0
})
mei.talk('こんにちは世界')
