const string = `
/* 我来画一个卡通版的漩涡鸣人把！*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ff8b60;
  min-width: 100vw;
  min-height: 100vh;
}

#naruto {
  position: relative;
  width: 350px;
  height: 350px;
  border: 15px solid #a55b41;
  border-radius: 50%;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
/* 首先鸣人有一卷标准的黄头发！ */

.hair {
  height: 90px;
  background-color: #dcd768;
  border-bottom: 3px solid #cec968;
}

/* 忍者们都一个属于自己的护额！ */

.hiddenleaf {
  height: 60px;
  background-color: #4d4747;
  position: relative;
}

.hiddenleaf .plate {
  width: 150px;
  height: 45px;
  background-color: #cecece;
  border-radius: 10px;
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}

.hiddenleaf .plate::before {
  content: '';
  width: 85px;
  height: 60px;
  position: absolute;
  right: -30px;
  background-color: #b5b9c3;
  transform: skew(-45deg);
}

/* 脸部开始了！ */
.face {
  height: 200px;
  background-color: #f2c9be;
  border: 5px solid #DFAB9D;

  z-index: -1;
}


/* 画俩个大大的眼睛 */
.eye {
  position: absolute;
  width: 45px;
  height: 45px;
  top: 180px;
  border-radius: 50%;
  border: 5px solid #638aaa;
  background-color: #fff;
}

.eye.left {
  left: 23%;
}

.eye.right {
  right: 23%;
}

/* 画鸣人的嘴巴  */
.mouth {
  position: absolute;
  width: 80px;
  height: 65px;
  top: 215px;
  left: 50%;
  background-color: #e89e8a;
  transform: translateX(-50%);
  border-radius: 0 0 50% 50%;
}


.mouth::before {
  content: '';
  display: block;
  width: 80px;
  height: 27px;
  border:1px solid #f2c9be;
  background-color: #f2c9be;
}

/*  鸣人最最有特征的胡须要来咯！ */

.whiskers .whisker {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-right: 12px solid transparent;
  border-left: 70px solid #917972;
  border-top: 14px solid transparent;
  transform: rotate(-35deg);
}

.whisker:first-child {
  top: 70%
}

.whisker:nth-child(2) {
  top: 80%
}

.whisker:nth-child(3) {
  top: 87%
}

/*  Right Whiskers */
.whisker:nth-child(4) {
  top: 70%;
  right: 0;
  transform: rotate(205deg);
}

.whisker:nth-child(5) {
  top: 80%;
  right: 0;
  transform: rotate(205deg);
}

.whisker:nth-child(6) {
  top: 87%;
  right: 0;
  transform: rotate(205deg);
}
 /* 绘画完毕！ 
 卡通版鸣人送给你，
 希望你喜欢  */
`
export  default  string