# Vagrant + CentOS7 + Nginx + Rails + MySQL の構成の備忘録

## 仮想環境の作成

```bash
# Vagrantの初期ファイルを作成
$ vagrant init

# 作成されたVagrantfileを編集
$ vi Vagrantfile
```

- Vagrantfileの最小設定

```Vagrantfile
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.network :private_network, ip: "192.168.33.10"
end
```

- Vagrantが起動 `vagrant ssh` でアクセスし、SELinuxを無効化と再起動
```
$ sudo vi /etc/selinux/config

# SELINUX=disabled
# SELINUXTYPE=targeted

$ sudo reboot
```

- 再起動後、もう一度sshし以下のコマンドを実行していく
```bash
# パッケージの最新化とyum-utils、wgetをインストール
$ sudo yum -y update
$ sudo yum -y install yum-utils wget

# firewallを無効化しておく（たぶんなっているはずだが...）
$ sudo systemctl stop firewalldvagr
$ sudo systemctl disable firawalld.service
```

以上が基本的な設定となる

## Nginxの導入

```bash
# rpmからリポジトリを入手し、Nginxをインストール
$ sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
$ sudo yum install -y nginx

# Nginxが起動および自動起動するよう変更
$ sudo systemctl start nginx
$ sudo systemctl enable nginx.service
```

