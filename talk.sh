#!/bin/sh

TEXT=$1

echo $1 | \
open_jtalk \
  -x /usr/local/dic \
  -m $HOME/apps/meitalk/voice/mei_happy.htsvoice \
  -ow /dev/stdout | \
aplay -iq
