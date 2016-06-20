const argv = require('minimist')(process.argv.slice(2))
const OpenJTalk = require('openjtalk')
const mei = new OpenJTalk({
  htsvoice        : './voice/kazane.htsvoice',
  dic             : './dic/open_jtalk_dic_utf_8-1.08',
  sampling_rate   : 48000,
  pitch           : 220,
  audio_buff_size : 48000,
  alpha           : 0.53,
  beta            : 0.1,
  uv_threshold    : 0.5,
  gv_weight_mgc   : 1,
  gv_weight_lf0   : 1
})

if (!argv.serif) return

mei.talk(argv.serif)
