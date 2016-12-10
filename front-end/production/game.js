let game = new Phaser.Game(320, 568, Phaser.AUTO, '', {
  preload: function() {
    // ゲームコンテンツを画面中央、サイズ最大で表示するための設定
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.refresh();

    this.load.image('logo', 'phaser.png');
  },

  create: function() {
    var logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }
});

module.exports = game;