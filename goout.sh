#!/bin/sh

if [ ! -z `bash athome.sh` ]
  then exit 0
fi

serif="
家を出る時間です。
戸締まりをして出かけましょう。
"

bash talk.sh "${serif}"
