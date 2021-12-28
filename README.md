## Stipop Javascript SDK

> 스티팝 자바스크립트 sdk 간략설명 [문서링크](https://docs.stipop.io)


## Installation
stipop-js-sdk is installed on Linux, Mac OS or Windows without any issues.

```bash
npm install --save stipop-js-sdk 
```

## API 키 발급
javascript sdk를 사용하려면 apikey가 필요하다.

apikey는 [여기](https://dashboard.stipop.io)에서 회원가입 및 앱생성시 발급받을 수 있다.


## 기본 사용법
### es5
```javascript
const Stipop = require('stipop-js-sdk');
const client = new Stipop(`${YOUR_API_KEY}`, 'v1');
```
### es6
```javascript 
import Stipop from 'stipop-js-sdk';
const client = new Stipop(`${YOUR_API_KEY}`, 'v1');
```

## 기능 리스트

| Method                                                            | Return Type         |
| ----------------------------------------------------------------- | ------------------- |
| [getPack()](#getpack)                                             | `Promise<Object>`   |
| [getPackInfo()](#getpackinfo)                                     | `Promise<Object>`   |
| [getPackRecent()](#getpackrecent)                                 | `Promise<Object>`   |
---


### getPack()

get the trending Package List

### Params

| Name          | Description           | Type          | Required          |
| --------------| ----------------------| --------------| ------------------|
| userId        | Unique value for every user to distinguish unique users. </br>The userId can be in any string format. </br> <b>Important</b>: Using same userId for multiple users is not allowed. |String        | true              |
| lang          | Specify default language for regional stickers.</br> Use a 2-letter ISO 639-1 language code. </br><b>Default Value: en</b> | String        | false          |
| countryCode   | Specify default country for local stickers. </br> Use a 2-letter ISO 3166-1 country code.</br> <b>Default Value: US</b> | String        | false             |
| animated   | <b>Y</b>: Look for animated stickers only</br> <b>N</b>: Look for static(still) stickers only</br> <b>Empty parameter:</b>Look for all stickers|String|false|
| pageNumber   | Specify pageNumber to show <b>limit</b> number of stickers per page. | Integer        | false             |
| limit   | The maximum number of stickers per page. </br>Use pageNumber accordingly for optimized sticker view. </br> <b>Default Value: 20 (max: 50)</b> | Integer  | false  |


### Examples
```js
const params = {
    userId: 9937,
    lang: en,
    countryCode: US,
    pageNumber:1,
    limit:10
}

const data = await client.getPack(params);
```

### Response Format
```json
{
    "header": {
      "code": "0000",
      "status": "success",
      "message": "success"
    },
    "body": {
        "packageList": [
        {
            "packageId": 2309,                          
            "packageName": "cada día",                    
            "packageImg": "https://img....70AAeHBn4N.png", 
            "packageCategory": "Animation/Cartoon,Gag", 
            "packageKeywords": "bonito,mono,bello,adorable,life,cute,lovely", 
            "packageAnimated": "N",                       
            "isNew": "N",                               
            "artistName": "pinono",                     
            "language": "Spanish",                         
            "isDownload": "Y",                             
                "isWish": "N"					
        },
        {
            "packageId": 2473,
            "packageName": "¿Cómo estás?",
            "packageImg": "https://img.....Ggdu7s3J15.gif",
            "packageCategory": "Phrases,Etc.",
            "packageKeywords": "¿Cómoestás?,letra",
            "packageAnimated": "Y",
            "isNew": "N",
            "artistName": "annapig",
            "language": "Spanish",
                "isDownload": "Y",                             
                "isWish": "N"					 
        },
        ......
        ],
        "pageMap": {
          "pageNumber": 1,
          "onePageCountRow": 10,
          "totalCount": 2953,
          "pageCount": 296,
          "groupCount": 30,
          "groupNumber": 0,
          "pageGroupCount": 10,
          "startPage": 1,
          "endPage": 10,
          "startRow": 0,
          "endRow": 10,
          "modNum": 3,
          "listStartNumber": 2953
        }
    }
}
```

| Attribute Name | Type | Description |
| -------------- | ---- | ----------- |
|packageId	|string|	Sticker package ID			     |
|packageName	|int	|Sticker package name				     |
|packageImg	|string|	Main image of sticker package		     |
|packageCategory|int	|Sticker package category			     |
|packageKeywords|string|	Sticker package keyword			     |
|packageAnimated|int	|Is sticker animated (Y/N)			     |
|price		|string|	Price of sticker pack: [Free] [$0.99] [$1.99]|
|isNew		|string|	Is sticker new (Y/N)			     |
|artistName	|int	|Name of the artist				     |
|language	|string|	Main language of sticker package	     |
|isDownload	|string|	Is sticker downloaded by the user (Y/N)	     |
|isWish		|string|	Is sticker in wish list (Y/N)		     |

---

### getPackInfo
The Sticker Pack Info API contains all the sticker images and package information you need to display a sticker pack page.

### Params

| Name          | Description           | Type          | Required          |
| --------------| ----------------------| --------------| ------------------|
| packId | The [packId] of a sticker pack, NOT stickerId.</br>Example: 6363, 5636, 5859 | string | true|
| userId        | Unique value for every user to distinguish unique users. </br>The userId can be in any string format. </br> <b>Important</b>: Using same userId for multiple users is not allowed. |String        | true              |

### Examples
```js
const params = {
    userId: 9937,
    packId: 118
}

const data = await client.getPackInfo(params);
```

### Response Format
```json
{
  "header": {
      "code": "0000",
      "status": "success",
      "message": "success"
  },
  "body": {
      "package": {
        "packageId": 118,                      
        "artistName": "MightyCat",            
        "packageName": "Stuart",                
        "packageImg": "https://img....png",   
        "packageAnimated": "N",                
        "packageCategory": "Animation/Cartoon", 
        "packageKeywords": "Stuart,Sticker",    
        "isNew": "N",                           
        "language": "English",                  
        "isDownload": "Y",                            
        "isWish": "N",					
        "stickers": [                          
            {
                "stickerId": 790,              
                "packageId": 118,               
                "stickerImg": "https://img...._5_2.png" 
            },
            {
                "stickerId": 791,
                "packageId": 118,
                "stickerImg": "https://img....._6_1.png"
            }
            ......
        ]
    }
  }
}
```

| Attribute Name | Type | Description |
| -------------- | ---- | ----------- |
|packageId	|string	|Sticker package ID			    |
|packageName	|int	|Sticker package name			    |
|packageImg	|string	|Main image of sticker package		    |
|packageCategory|int	|Sticker package category		    |
|packageKeywords|string	|Sticker package keyword		    |
|packageAnimated|int	|Is sticker animated (Y/N)		    |
|isNew		|string	|Is sticker new (Y/N)			    |
|artistName	|int	|Name of the artist			    |
|language	|string	|Main language of sticker package	    |
|isDownload	|string	|Is sticker downloaded by the user (Y/N)    |
|isWish		|string	|Is sticker in wish list (Y/N)		    |
|stickers	|string	|List of stickers within the sticker package|
|stickerId	|string	|Sticker ID				    |
|stickerImg	|string	|Sticker image url			    |

---

### getPackRecent()

The Recently Viewed Packs API gives the list of sticker packs a user has viewed recently

### Params

| Name          | Description           | Type          | Required          |
| --------------| ----------------------| --------------| ------------------|
| userId        | Unique value for every user to distinguish unique users. </br>The userId can be in any string format. </br> <b>Important</b>: Using same userId for multiple users is not allowed. |String        | true              |
| pageNumber   | Specify pageNumber to show <b>limit</b> number of stickers per page. | Integer        | false             |
| limit   | The maximum number of stickers per page. </br>Use pageNumber accordingly for optimized sticker view. </br> <b>Default Value: 20 (max: 50)</b> | Integer  | false  |

### Examples
```js
const params = {
    userId: 9937,
    pageNumber:1,
    limit:20
}

const data = await client.getPackRecent(params);
```

### Response Format
```json
{
    "header": {
      "code": "0000",
      "status": "success",
      "message": "success"
    },
    "body": {
        "packageList": [
        {
            "packageId": 2309,                          
            "packageName": "cada día",                    
            "packageImg": "https://img....70AAeHBn4N.png", 
            "packageCategory": "Animation/Cartoon,Gag", 
            "packageKeywords": "bonito,mono,bello,adorable,life,cute,lovely", 
            "packageAnimated": "N",                       
            "isNew": "N",                               
            "artistName": "pinono",                     
            "language": "Spanish",                         
            "isDownload": "Y",                             
                "isWish": "N"					
        },
        {
            "packageId": 2473,
            "packageName": "¿Cómo estás?",
            "packageImg": "https://img.....Ggdu7s3J15.gif",
            "packageCategory": "Phrases,Etc.",
            "packageKeywords": "¿Cómoestás?,letra",
            "packageAnimated": "Y",
            "isNew": "N",
            "artistName": "annapig",
            "language": "Spanish",
                "isDownload": "Y",                             
                "isWish": "N"					 
        },
        ......
        ],
        "pageMap": {
          "pageNumber": 1,
          "onePageCountRow": 10,
          "totalCount": 2953,
          "pageCount": 296,
          "groupCount": 30,
          "groupNumber": 0,
          "pageGroupCount": 10,
          "startPage": 1,
          "endPage": 10,
          "startRow": 0,
          "endRow": 10,
          "modNum": 3,
          "listStartNumber": 2953
        }
    }
}
```

| Attribute Name | Type | Description |
| -------------- | ---- | ----------- |
|packageId	|string|	Sticker package ID			     |
|packageName	|int	|Sticker package name				     |
|packageImg	|string|	Main image of sticker package		     |
|packageCategory|int	|Sticker package category			     |
|packageKeywords|string|	Sticker package keyword			     |
|packageAnimated|int	|Is sticker animated (Y/N)			     |
|price		|string|	Price of sticker pack: [Free] [$0.99] [$1.99]|
|isNew		|string|	Is sticker new (Y/N)			     |
|artistName	|int	|Name of the artist				     |
|language	|string|	Main language of sticker package	     |
|isDownload	|string|	Is sticker downloaded by the user (Y/N)	     |
|isWish		|string|	Is sticker in wish list (Y/N)		     |

