package com.upc.project.game.screens;

import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.g2d.TextureAtlas;
import com.badlogic.gdx.maps.tiled.TiledMap;
import com.badlogic.gdx.maps.tiled.TmxMapLoader;
import com.badlogic.gdx.maps.tiled.renderers.OrthogonalTiledMapRenderer;
import com.upc.project.game.objects.Player;
import com.upc.project.game.ui.Hud;
import com.upc.project.lib.core.scenes.Scene;

/**
 * Created by Alumnos on 19/05/2018.
 */

public class Game extends Scene{
    private TextureAtlas textureAtlas;
    private OrthogonalTiledMapRenderer tiledMapRenderer;
    private TmxMapLoader tmxMapLoader;
    private TiledMap tiledMap;
    private float elapsed;
    private boolean isGameOver;
    private Player player;
    private Hud hud;
    public Game(SpriteBatch spriteBatch){
        super(spriteBatch);
        player = new Player();
        hud = new Hud(spriteBatch,1);
        elapsed = 0f;
        isGameOver = false;
        tmxMapLoader = new TmxMapLoader();
        String filename = "level1.tmx";
        tiledMap = tmxMapLoader.load(filename);
        tiledMapRenderer = new OrthogonalTiledMapRenderer(tiledMap);

    }

    public void endLevel(){

    }

    public void spawnItem(){

    }

    public void handleSpawnItems(){

    }

    @Override
    public void update(float dt) {
        super.update(dt);
        handleSpawnItems();
        camera.update();
        tiledMapRenderer.setView(camera);
        //TO-DO update hudss
    }

    @Override
    public void render(float delta) {
        super.render(delta);
        tiledMapRenderer.render();
        spriteBatch.setProjectionMatrix(camera.combined);
        spriteBatch.begin();
        spriteBatch.end();
        //TO-DO hud
    }
}
