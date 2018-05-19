package com.upc.project.game.ui;

import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.scenes.scene2d.Stage;
import com.badlogic.gdx.scenes.scene2d.ui.Label;
import com.badlogic.gdx.scenes.scene2d.ui.Table;
import com.badlogic.gdx.utils.Disposable;
import com.badlogic.gdx.utils.viewport.FitViewport;
import com.badlogic.gdx.utils.viewport.Viewport;
import com.upc.project.game.Config;


/**
 * Created by Alumnos on 19/05/2018.
 */

public class Hud implements Disposable {
    private Viewport viewport;
    private Stage stage;
    private SpriteBatch spriteBatch;
    private Label countdownLabel;
    private Label timeLabel;
    private Label worldLabel;
    private Label liveLabel;
    private Label levelLabel;
    private Label scoreLabel;
    private int worldTime;
    private int score;
    private float timeCount;
    public Hud(SpriteBatch spriteBatch,int level){
        this.spriteBatch = spriteBatch;
        worldTime = 0;
        score = 0;
        viewport = new FitViewport(Config.GAME_WIDTH,
                        Config.GAME_HEIGHT, new OrthographicCamera());
        stage = new Stage(viewport,spriteBatch);
        countdownLabel = new Label(String.format("%03d",
                worldTime),new Label.LabelStyle(new BitmapFont(),
                Color.WHITE));

        worldLabel = new Label("WORLD",
                new Label.LabelStyle(new BitmapFont(),
                Color.WHITE));

        scoreLabel = new Label(String.format("%06d",score),
                new Label.LabelStyle(new BitmapFont(),
                        Color.WHITE));
        levelLabel = new Label("1-"+level,
                new Label.LabelStyle(new BitmapFont(),
                        Color.WHITE));

        timeLabel = new Label("TIME",
                new Label.LabelStyle(new BitmapFont(),
                        Color.WHITE));
        liveLabel = new Label("PLAYER",
                new Label.LabelStyle(new BitmapFont(),
                        Color.WHITE));

        Table table = new Table();
        //haz la table 100% de ancho
        table.setFillParent(true);
        //manda arriba
        table.top();
        //agrega columna y me le mete pading 10px
        table.add(liveLabel).expandX().padTop(10);
        table.add(worldLabel).expandX().padTop(10);
        table.add(timeLabel).expandX().padTop(10);
        //crea nueva fila
        table.row();
        table.add(scoreLabel).expandX();
        table.add(levelLabel).expandX();
        table.add(countdownLabel).expandX();
        stage.addActor(table);
    }
    @Override
    public void dispose() {

    }
}
