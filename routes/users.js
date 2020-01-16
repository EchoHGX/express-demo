var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send(`
  //   <script type="text/javascript">
  //     window.addEventListener('message',function  (e) {
  //         console.log(e.origin,e.data);
  //         alert('收到妹子一枚：'+e.data);
  //     });
  // </script>
  // `);
  res.send(`user`);
});

module.exports = router;
