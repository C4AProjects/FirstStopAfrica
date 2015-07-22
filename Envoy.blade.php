@servers(['nubian' => 'hplab@41.89.6.225','nubian-local' => 'hplab@192.168.133.25'])

@task('create',['on'=>'nubian'])
    cd /var/www/senshi
    rm -rf yachiru
    git clone git@192.168.133.21:bushido-code/yachiru.git
    cd yachiru
    chmod -R 777 ../yachiru
    npm install
    composer install
@endtask

@task('deploy',['on'=>'nubian-local'])
    cd /var/www/senshi/yachiru
    git checkout develop
    git pull origin develop
    composer install
@endtask
