# Vagrant + CentOS7 + Nginx + Rails + MySQL の構成の備忘録

## 仮想環境の作成

```bash
# Vagrantの初期ファイルを作成
$ vagrant init

# 作成されたVagrantfileを編集
$ vi Vagrantfile
```

Vagrantfileの最小設定

```Vagrantfile
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.network :private_network, ip: "192.168.33.10"
end
```
