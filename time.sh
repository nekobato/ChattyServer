#!/bin/sh

if [ ! -z `bash athome.sh` ]
  then exit 0
fi

time=`date +'%k時%M分'`

serif="
${time}です。
${alert}
"

bash talk.sh "${talk}"
