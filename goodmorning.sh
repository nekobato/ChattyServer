#!/bin/sh

if [ ! -z `bash athome.sh` ]
  then exit 0
fi

date=`date +'%m月%d日'`
weather='晴れ'

serif="
おはようございます。
${date}。
今日の天気は、${weather}です。
${alert}
"

bash talk.sh "${serif}"
