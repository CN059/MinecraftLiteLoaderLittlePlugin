ll.registerPlugin(
    /* name */ "dead_site",
    /* introduction */ "命令行死亡坐标输出",
    /* version */[0, 0, 1],
    /* otherInformation */ { "作者": "CN059", "许可证": "GPL-2.0" }
)
mc.listen('onPlayerDie',(player)=>{
    log(player.name+"被杀死了,坐标是位于"+player.pos.dim+"的"+player.lastDeathPos.x+","+player.lastDeathPos.y+","+player.lastDeathPos.z);
})