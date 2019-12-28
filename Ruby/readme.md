# Vagrant Start Up

## For Windows
```
Virtual Box Version : 6.0.4
=> https://www.virtualbox.org/wiki/Download_Old_Builds_6_0

vagrant version : 2.2.6

```


## install plugins
```bash
$ vagrant plugin install vagrant-vbguest
```

# Provisioning

```bash
$ vagrant up --provision
```
- 悲しいことに初回起動時は10分くらいかかります。
- rbenv経由にてRubyをインストールするのですが、まあ気長に待ってください。
- なぜかNode.jsがインスト―ルされていない。
```bash
$ sudo yum install -y nodejs
```
なのでインストールしておく必要がある
