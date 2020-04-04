## 미디어쿼리

기기의 해상도에 따라 CSS를 달리 지정해야하는 경우 미디어쿼리를 사용하면 됩니다.

**max-width**
미디어 쿼리에서 최대 너비를 설정합니다. 브라우저의 너비가 **max-width 값 이하**인 경우에만 CSS가 적용됩니다.

**min-width**
브라우저의 너비가 **min-width 값 이상**일 때만 CSS가 적용됩니다.

[미디어쿼리 Github](https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488)

```
/*
	Desktops
    1281px 이상
*/

@media (min-width: 1281px) {
  //CSS
}

/* 
  Laptops, Desktops
  1025px to 1280px 
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  //CSS
}

/* 
  Tablets, Ipads (portrait)
  768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  //CSS
}

/* 
  Tablets, Ipads (landscape)
  768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  //CSS
}

/* 
  Low Resolution Tablets, Mobiles (Landscape)
  481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  //CSS
}

/* 
   Most of the Smartphones Mobiles (Portrait)
   B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  //CSS
}
```


### 모바일 우선(Mobile First)

작은 스크린에서 큰 스크린으로 조절해 나갈때는 min-width
```
/* 786px 이하에서 적용 */
A

/* 768px 이상에서 적용 */
@media ( min-width: 768px ) {
  B
}

/* 1024px 이상에서 적용 */
@media ( min-width: 1024px ) {
  C
}
```

### 데스크톱 우선(Desktop First)

큰 스크린에서 작은 스크린으로 조절해 나갈때는 max-width

```
/* 1024px 이상에서 적용 */ 
A

/* 1024px 이하에서 적용 */
@media ( max-width: 1023px ) {
  B
}

/* 768px 이하에서 적용 */
@media ( max-width: 767px ) {
  C
}
```

